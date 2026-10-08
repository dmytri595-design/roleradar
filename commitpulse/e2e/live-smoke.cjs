const { chromium } = require('playwright');

const url = process.env.SMOKE_URL || 'https://commitpulse-demo.vercel.app';
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on('pageerror', e => errors.push(String(e)));
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });

await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForSelector('#metricCards .metric');

const metrics = await page.locator('#metricCards .metric').count();
const openText = await page.locator('#metricCards .metric').first().locator('.value').textContent();
if (metrics !== 4 || openText.trim() !== '8') throw new Error(\`Unexpected overview metrics: \${metrics}/\${openText}\`);

await page.click('.navbtn[data-screen="orders"]');
await page.waitForSelector('#ordersBody tr');
const orderRows = await page.locator('#ordersBody tr').count();
if (orderRows !== 8) throw new Error(\`Expected 8 demo POs, got \${orderRows}\`);

await page.locator('[data-check="PO-1842"]').check();
await page.click('#ordersSendBtn');
await page.waitForSelector('#batchModal.open');
if (!(await page.locator('#batchPreview').innerText()).includes('Nordic Components AS')) throw new Error('Batch preview missing Nordic supplier');
await page.click('#confirmBatchBtn');
await page.waitForTimeout(100);
await page.click('.navbtn[data-screen="supplier"]');
await page.waitForSelector('.supplier-shell');
if (!(await page.locator('.supplier-shell').innerText()).includes('Confirmation request')) throw new Error('Supplier request page did not render');

const firstDate = page.locator('[data-supplier-date]').first();
await firstDate.fill('2026-10-21');
await page.locator('#supplierConfirm').click();
await page.waitForTimeout(100);

await page.reload({ waitUntil: 'networkidle' });
await page.waitForSelector('#metricCards .metric');
const persistedOrder = await page.locator('[data-check="PO-1842"]');
if (await persistedOrder.count() !== 1) throw new Error('PO state did not survive reload');

await page.click('.navbtn[data-screen="import"]');
await page.setInputFiles('#csvInput', {
  name: 'smoke.csv',
  mimeType: 'text/csv',
  buffer: Buffer.from('PO Number,Supplier,Supplier Email,SKU,Quantity,Required Date\nPO-SMOKE,Smoke Supplier,s@example.com,SM-1,12,2026-11-12\n')
});
await page.waitForSelector('#mappingArea');
await page.click('#applyImport');
await page.waitForTimeout(100);
await page.click('.navbtn[data-screen="orders"]');
if (!(await page.locator('#ordersBody').innerText()).includes('PO-SMOKE')) throw new Error('CSV import did not create the smoke PO');

const dl = page.waitForEvent('download');
await page.click('#ordersExportBtn');
const download = await dl;
if (!download.suggestedFilename().endsWith('.csv')) throw new Error('Export did not create CSV');

if (errors.length) throw new Error(\`Browser errors: \${errors.join(' | ')}\`);
console.log(JSON.stringify({ok:true,url,metrics,orderRows,exported:download.suggestedFilename()}));
await browser.close();
