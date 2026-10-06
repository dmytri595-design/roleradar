const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', err => errors.push(String(err)));
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });

  await page.goto('https://roleradar-demo.vercel.app/?smoke=1', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(500);
  await page.getByText('RoleRadar', { exact: true }).first().waitFor();

  const body = await page.locator('body').innerText();
  console.log('PAGE TITLE:', await page.title());
  console.log('PAGE BODY:', body.slice(0, 600));
  if (!body.includes('Overview')) throw new Error('Overview missing; live URL returned unexpected content');

  await page.getByRole('button', { name: 'Load demo' }).click();
  await page.waitForTimeout(200);
  if ((await page.locator('#posture').innerText()) === '—') throw new Error('Demo did not calculate posture');
  const tableCount = await page.locator('#tbody tr').count();
  if (!tableCount) {
    console.log('TBODY HTML:', await page.locator('#tbody').innerHTML());
    console.log('BROWSER ERRORS SO FAR:', JSON.stringify(errors));
    throw new Error('Demo identity table is empty');
  }

  await page.getByRole('button', { name: /Identities/ }).click();
  if (!(await page.locator('#viewIdentities').innerText()).includes('Identity inventory')) throw new Error('Identities tab failed');

  await page.getByRole('button', { name: /Findings/ }).click();
  if (!(await page.locator('#viewFindings').innerText()).includes('Remediation queue')) throw new Error('Findings tab failed');

  const findingCount = await page.locator('.findingRow').count();
  if (!findingCount) throw new Error('Demo produced no findings');

  await page.getByRole('button', { name: 'Start review' }).first().click();
  await page.waitForTimeout(150);
  if ((await page.locator('.findingStatus.review').count()) < 1) throw new Error('Finding could not move to review');

  await page.getByRole('button', { name: /Policies/ }).click();
  if (!(await page.locator('#viewPolicies').innerText()).includes('Policy controls')) throw new Error('Policies tab failed');
  const stale = page.locator('.policyInput[data-k="staleDays"]');
  await stale.fill('60');
  await page.getByRole('button', { name: 'Save policy' }).click();
  await page.waitForTimeout(200);

  await page.getByRole('button', { name: /Overview/ }).click();
  await page.waitForTimeout(200);

  const [csvDownload] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#exportBtn').click()
  ]);
  if (csvDownload.suggestedFilename() !== 'roleradar-review.csv') throw new Error('CSV export failed');

  await page.getByRole('button', { name: /Evidence/ }).click();
  const [jsonDownload] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#packBtn').click()
  ]);
  if (jsonDownload.suggestedFilename() !== 'roleradar-evidence-pack.json') throw new Error('JSON export failed');

  const [htmlDownload] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#htmlReportBtn').click()
  ]);
  if (htmlDownload.suggestedFilename() !== 'roleradar-audit-report.html') throw new Error('HTML export failed');

  const csv = 'name,email,role,department,last_login,mfa,admin,apps,status\nTest User,test@example.com,Developer,Engineering,2026-10-05,yes,no,3,active\nTest Admin,admin@example.com,Admin,IT,2026-01-01,no,yes,12,active\n';
  await page.locator('#uploadBtn').click();
  await page.locator('#fileInput').setInputFiles({ name: 'smoke.csv', mimeType: 'text/csv', buffer: Buffer.from(csv) });
  await page.waitForTimeout(300);
  if (!(await page.locator('#dataMeta').innerText()).includes('2 identities')) throw new Error('CSV import failed');

  page.once('dialog', d => d.accept());
  await page.locator('#resetBtn').click();
  await page.waitForTimeout(100);

  if (errors.length) throw new Error('Browser errors: ' + errors.join(' | '));
  console.log('LIVE SMOKE PASS');
  console.log('tested: load, demo, identities, findings, remediation, policy save, CSV export, JSON export, HTML export, CSV import, reset');
  await browser.close();
})().catch(async err => {
  console.error(err);
  process.exit(1);
});
