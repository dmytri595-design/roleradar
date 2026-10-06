const { chromium } = require('playwright');

(async()=>{
  const browser=await chromium.launch({headless:true});
  const page=await browser.newPage();
  const errors=[];
  page.on('pageerror',e=>errors.push(String(e)));
  page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});

  await page.goto('https://marginguard-demo.vercel.app/?smoke=1',{waitUntil:'networkidle',timeout:30000});
  if(!((await page.locator('body').innerText()).includes('MarginGuard')))throw new Error('Live app missing');
  if(!(await page.locator('#rows tr').count()))throw new Error('Project table empty');

  await page.getByRole('button',{name:/Projects/}).click();
  if(!(await page.locator('#projects').innerText()).includes('Project register'))throw new Error('Projects view failed');

  await page.getByRole('button',{name:/Alerts/}).click();
  if(!(await page.locator('#alerts').innerText()).includes('Margin alerts'))throw new Error('Alerts view failed');

  const [csvDownload]=await Promise.all([page.waitForEvent('download'),page.locator('#exp').click()]);
  if(csvDownload.suggestedFilename()!=='marginguard-projects.csv')throw new Error('CSV export failed');

  await page.getByRole('button',{name:/Settings/}).click();
  await page.locator('#floor').fill('35');
  await page.locator('#save').click();

  await page.getByRole('button',{name:/Overview/}).click();
  if((await page.locator('#risk').innerText())!=='3')throw new Error('Risk count mismatch after settings');

  await page.getByRole('button',{name:/Reports/}).click();
  const [jsonDownload]=await Promise.all([page.waitForEvent('download'),page.locator('#json').click()]);
  if(jsonDownload.suggestedFilename()!=='marginguard-evidence.json')throw new Error('JSON export failed');
  const [htmlDownload]=await Promise.all([page.waitForEvent('download'),page.locator('#html').click()]);
  if(htmlDownload.suggestedFilename()!=='marginguard-report.html')throw new Error('HTML export failed');

  await page.getByRole('button',{name:/Overview/}).click();
  const csv='project,client,fee,budget_hours,actual_hours,remaining_hours,hourly_cost,billed_scope\nTest Project,Test Client,10000,100,90,10,40,9000\n';
  await page.locator('#imp').click();
  await page.locator('#file').setInputFiles({name:'smoke.csv',mimeType:'text/csv',buffer:Buffer.from(csv)});
  await page.waitForTimeout(200);
  if((await page.locator('#rows tr').count())!==1)throw new Error('CSV import failed');
  if(errors.length)throw new Error('Browser errors: '+errors.join(' | '));
  console.log('MARGIN GUARD LIVE SMOKE PASS');
  await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
