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
if (errors.length) throw new Error('Boot browser errors: '+errors.join(' | '));
if (await page.locator('.navbtn[data-screen="exceptions"]').count() !== 1) throw new Error('v1.2 navigation did not initialize');
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
await page.click('.navbtn[data-screen="exceptions"]');
await page.waitForSelector('#v12ExceptionList');
if (!(await page.locator('#v12ExceptionList').innerText()).includes('PO-1877')) throw new Error('Exception Desk missing known exception');
await page.locator('[data-accept-exception="PO-1877"]').click();
if (!(await page.locator('#v12ExceptionList').innerText()).includes('No supplier exceptions')) throw new Error('Exception acceptance did not clear the issue');

await page.click('.navbtn[data-screen="reminders"]');
await page.waitForSelector('#v12ReminderList');
if (await page.locator('#v12ReminderList [data-draft-po]').count() < 1) throw new Error('Reminder queue did not show stale follow-ups');
await page.locator('#v12ReminderList [data-draft-po]').first().click();
await page.waitForSelector('#v12Modal.open');
if (!(await page.locator('#v12ModalContent').innerText()).includes('does not send email')) throw new Error('Email draft limitations not visible');
await page.locator('#v12ModalClose').click();

await page.click('.navbtn[data-screen="settings"]');
await page.fill('#v12WorkspaceName','Smoke Workspace');
await page.fill('#v12ReminderDays','4');
await page.click('#v12SaveSettings');
if (!(await page.locator('.topbar .workspace-pill').innerText()).includes('Smoke Workspace')) throw new Error('Workspace name did not update');

await page.click('.navbtn[data-screen="orders"]');
await page.click('#v12NewPo');
await page.fill('#v12PoId','PO-SMOKE-MANUAL');
await page.fill('#v12PoSupplier','Manual Test Supplier');
await page.fill('#v12PoEmail','manual@example.com');
await page.fill('#v12PoSku','TEST-01');
await page.fill('#v12PoQty','17');
await page.fill('#v12PoRequired','2026-11-20');
await page.fill('#v12PoPrice','4.25');
await page.click('#v12SavePo');
if (!(await page.locator('#ordersBody').innerText()).includes('PO-SMOKE-MANUAL')) throw new Error('Manual PO create failed');

await page.click('.navbtn[data-screen="analytics"]');
await page.waitForSelector('#v12AnalyticsCards .v12stat');
if (await page.locator('#v12AnalyticsCards .v12stat').count() !== 4) throw new Error('Analytics metrics did not render');
const reportDownloadPromise=page.waitForEvent('download');
await page.click('#v12PrintReport');
const reportDownload=await reportDownloadPromise;
if (!reportDownload.suggestedFilename().endsWith('.html')) throw new Error('Operations report download failed');

await page.click('.navbtn[data-screen="settings"]');
const backupDownloadPromise=page.waitForEvent('download');
await page.click('#v12BackupBtn');
const backupDownload=await backupDownloadPromise;
if (!backupDownload.suggestedFilename().endsWith('.json')) throw new Error('JSON backup download failed');


if(errors.length) throw new Error('Browser errors: '+errors.join(' | '));
console.log(JSON.stringify({ok:true,overviewMetrics:5,demoPOs:8,groupedRequests:true,multiPOView:await rows.count(),export:dl.suggestedFilename()}));
await browser.close();
})().catch(err=>{console.error(err);process.exit(1)});
