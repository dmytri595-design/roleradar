(async()=>{
const { chromium } = require('playwright');
const url=process.env.SMOKE_URL||'http://127.0.0.1:4173';
const browser=await chromium.launch({headless:true});
const context=await browser.newContext();
const page=await context.newPage();
const errors=[];
page.on('pageerror',e=>errors.push(String(e)));
page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});

await page.goto(url,{waitUntil:'networkidle'});
await page.waitForSelector('#metricCards .metric');
if(await page.locator('#metricCards .metric').count()!==5) throw new Error('Top overview metrics missing');
if(!(await page.locator('#attentionQueue').innerText()).includes('Sundby Packaging AB')) throw new Error('Attention queue missing soon PO');

await page.click('.navbtn[data-screen="orders"]');
await page.waitForSelector('#ordersBody tr');
if(await page.locator('#ordersBody tr').count()!==8) throw new Error('Expected 8 demo POs');

await page.locator('#selectAll').check();
await page.click('#ordersRequest');
await page.waitForSelector('#requestModal.open');
const preview=await page.locator('#requestPreview').innerText();
if(!preview.includes('Nordic Components AS')||!preview.includes('Sundby Packaging AB')) throw new Error('Request grouping preview is wrong');
await page.click('#createRequestsBtn');
await page.waitForSelector('#screen-requests.active');

const requestCards=page.locator('.request-card');
if(await requestCards.count()<4) throw new Error('Expected grouped confirmation requests');

const firstOpen=page.locator('.request-open[data-id="RQ-1001"]');
await firstOpen.click();
await page.waitForSelector('.supplier-shell');
const rows=page.locator('[data-order-row]');
if(await rows.count()!==2) throw new Error('Multi-PO supplier request did not render 2 rows');
const first=rows.first();
const originalDate=await first.locator('.supplier-date').inputValue();
await first.locator('.supplier-date').fill(originalDate);
await first.locator('.supplier-qty').fill(await first.locator('.supplier-qty').inputValue());
await page.locator('#supplierSubmit').click();
await page.waitForTimeout(100);
const storedBeforeReload=await page.evaluate(()=>JSON.parse(localStorage.getItem('commitpulse:workspace:v2')));
if(!storedBeforeReload.requests.some(r=>r.id==='RQ-1001'&&r.status==='confirmed')) throw new Error('Request state was not written to localStorage');
await page.reload({waitUntil:'networkidle'});
const storedAfterReload=await page.evaluate(()=>JSON.parse(localStorage.getItem('commitpulse:workspace:v2')));
if(!storedAfterReload.requests.some(r=>r.id==='RQ-1001'&&r.status==='confirmed')) throw new Error('Request state did not persist after reload');
await page.click('.navbtn[data-screen="requests"]');
await page.waitForSelector('.request-card');

await page.click('.navbtn[data-screen="import"]');
await page.setInputFiles('#csvInput',{name:'smoke.csv',mimeType:'text/csv',buffer:Buffer.from('PO Number,Supplier,Supplier Email,SKU,Quantity,Required Date\nPO-SMOKE,Smoke Supplier,s@example.com,SM-1,12,2026-11-12\n')});
await page.waitForSelector('#mappingArea');
await page.click('#applyImport');
await page.waitForTimeout(100);
await page.click('.navbtn[data-screen="orders"]');
if(!(await page.locator('#ordersBody').innerText()).includes('PO-SMOKE')) throw new Error('CSV import failed');

const dlPromise=page.waitForEvent('download');
await page.click('#ordersExport');
const dl=await dlPromise;
if(!dl.suggestedFilename().endsWith('.csv')) throw new Error('CSV export failed');

if(errors.length) throw new Error('Browser errors: '+errors.join(' | '));
console.log(JSON.stringify({ok:true,overviewMetrics:5,demoPOs:8,groupedRequests:true,multiPOView:await rows.count(),export:dl.suggestedFilename()}));
await browser.close();
})().catch(err=>{console.error(err);process.exit(1)});
