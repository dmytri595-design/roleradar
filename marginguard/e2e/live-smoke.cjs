const { chromium } = require('playwright');

(async()=>{
  const browser=await chromium.launch({headless:true});
  const context=await browser.newContext();
  const page=await context.newPage();
  const errors=[];
  page.on('pageerror',e=>errors.push(String(e)));
  page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});

  const fail=(m)=>{throw new Error(m)};

  await page.goto('https://marginguard-demo.vercel.app/?smoke=2',{waitUntil:'networkidle',timeout:30000});
  await page.evaluate(()=>localStorage.clear());
  await page.reload({waitUntil:'networkidle'});
  if(!(await page.locator('body').innerText()).includes('MarginGuard'))fail('Live app missing');
  if(!(await page.locator('text=v2.0.0').count()))fail('App version missing');
  if((await page.locator('#projectRows tr').count())!==8)fail('Expected 8 demo projects');

  const atRisk=await page.locator('#riskProjects').innerText();
  if(atRisk!=='3')fail('Expected 3 at-risk demo projects, got '+atRisk);

  await page.getByRole('button',{name:/Details/}).first().click();
  if(!(await page.locator('#modal').evaluate(el=>el.classList.contains('show'))))fail('Project details modal did not open');
  await page.getByRole('button',{name:'Move to review'}).click();
  await page.waitForTimeout(80);
  await page.getByRole('button',{name:/Margin alerts/}).click();
  if(!(await page.locator('#alertList').innerText()).includes('review'))fail('Alert did not move to review');

  await page.getByRole('button',{name:'Resolve',exact:true}).first().click();
  await page.waitForTimeout(80);
  await page.locator('#alertFilter').selectOption('resolved');
  if(!(await page.locator('#alertList').innerText()).includes('resolved'))fail('Resolved alert filter is empty');

  await page.getByRole('button',{name:/Settings/}).click();
  await page.locator('.control[data-key="marginFloor"]').fill('35');
  await page.getByRole('button',{name:'Save controls'}).click();
  if(await page.locator('.control[data-key="marginFloor"]').inputValue()!=='35')fail('Controls did not save');

  await page.getByRole('button',{name:/Reports/}).click();
  const [jsonDownload]=await Promise.all([page.waitForEvent('download'),page.locator('#jsonExport').click()]);
  if(jsonDownload.suggestedFilename()!=='marginguard-evidence-pack.json')fail('JSON export failed');
  const [htmlDownload]=await Promise.all([page.waitForEvent('download'),page.locator('#htmlExport').click()]);
  if(htmlDownload.suggestedFilename()!=='marginguard-report.html')fail('HTML export failed');

  await page.getByRole('button',{name:/Projects/}).click();
  const [csvDownload]=await Promise.all([page.waitForEvent('download'),page.locator('#projectExport').click()]);
  if(csvDownload.suggestedFilename()!=='marginguard-projects.csv')fail('CSV export failed');

  // Quoted fields + semicolon delimiter + optional billed scope.
  const csv=['project;client;fee;budget_hours;actual_hours;remaining_hours;hourly_cost;status',
             '"Quoted, Project";"Client; A";10000;100;60;20;40;delivery',
             'Valid Project;Normal Client;20000;150;100;30;50;delivery',
             'Bad Project;Normal Client;0;150;100;30;50;delivery'].join('\n');
  await page.getByRole('button',{name:/Overview/}).click();
  await page.locator('#importBtn').click();
  await page.locator('#fileInput').setInputFiles({name:'smoke.csv',mimeType:'text/csv',buffer:Buffer.from(csv)});
  await page.waitForTimeout(250);
  if((await page.locator('#projectRows tr').count())!==2)fail('CSV import did not keep 2 valid rows');
  if(!(await page.locator('#importMeta').innerText()).includes('1 skipped'))fail('CSV skipped-row reporting failed');

  const csvState=await page.evaluate(()=>({
    rows:summary().rows.length,
    first:summary().rows[0],
    source:localStorage.getItem('marginguard:state:v2')
  }));
  if(csvState.rows!==2)fail('Imported state count mismatch');
  if(csvState.first.scopeExposure!==0)fail('Missing billed_scope should not create artificial scope exposure');

  // Persistence across reload.
  await page.reload({waitUntil:'networkidle'});
  if((await page.locator('#projectRows tr').count())!==2)fail('Local persistence failed after reload');

  // Reset.
  await page.getByRole('button',{name:'Reset'}).click();
  await page.waitForTimeout(100);
  if((await page.locator('#projectRows tr').count())!==8)fail('Reset did not restore demo dataset');

  if(errors.length)fail('Browser errors: '+errors.join(' | '));
  console.log('MARGIN GUARD LIVE SMOKE PASS');
  await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
