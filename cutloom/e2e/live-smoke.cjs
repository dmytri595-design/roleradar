const { chromium } = require('playwright');

const URL = process.env.CUTLOOM_URL || 'https://cutloom-demo.vercel.app';

function makeWavBuffer(seconds = 1, sampleRate = 8000) {
  const samples = Math.max(1, Math.floor(seconds * sampleRate));
  const dataBytes = samples * 2;
  const buffer = Buffer.alloc(44 + dataBytes);
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataBytes, 4);
  buffer.write('WAVE', 8);
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(1, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * 2, 28);
  buffer.writeUInt16LE(2, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataBytes, 40);
  for (let i = 0; i < samples; i++) {
    const sample = Math.round(Math.sin(i / 14) * 4500);
    buffer.writeInt16LE(sample, 44 + i * 2);
  }
  return buffer;
}

async function makeWebmFixture(page) {
  const bytes = await page.evaluate(async () => {
    if (!window.MediaRecorder || !HTMLCanvasElement.prototype.captureStream) return null;
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 180;
    const ctx = canvas.getContext('2d');
    const stream = canvas.captureStream(15);
    const mime = ['video/webm;codecs=vp8', 'video/webm'].find(x => MediaRecorder.isTypeSupported?.(x)) || '';
    const recorder = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
    const chunks = [];
    recorder.ondataavailable = event => event.data.size && chunks.push(event.data);
    const stopped = new Promise(resolve => { recorder.onstop = resolve; });
    recorder.start(50);
    for (let i = 0; i < 6; i++) {
      ctx.fillStyle = i % 2 ? '#173b4f' : '#10151f';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#d9ff4a';
      ctx.fillRect(24 + i * 18, 60, 80, 40);
      await new Promise(resolve => setTimeout(resolve, 70));
    }
    recorder.stop();
    await stopped;
    stream.getTracks().forEach(track => track.stop());
    const blob = new Blob(chunks, { type: 'video/webm' });
    return Array.from(new Uint8Array(await blob.arrayBuffer()));
  });
  return bytes ? Buffer.from(bytes) : null;
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });

  const response = await page.goto(URL, { waitUntil: 'networkidle' });
  if (!response || !response.ok()) throw new Error(`Live URL returned ${response?.status() ?? 'no response'}`);
  await page.waitForSelector('#canvas');
  if (!(await page.title()).includes('Launch Reel')) throw new Error('Unexpected title');

  const sceneCountText = (await page.locator('#sceneCount').textContent()).trim();
  console.log('CUTLOOM_STATE', JSON.stringify({
    title: await page.title(),
    sceneCountText,
    storage: await page.evaluate(() => ({ localStorage: !!window.localStorage, indexedDB: !!window.indexedDB }))
  }));
  if (sceneCountText !== '6 scenes') throw new Error(`Demo scenes missing: ${JSON.stringify(sceneCountText)}`);

  await page.getByRole('button', { name: 'Scenes' }).click();
  await page.waitForSelector('#storyGrid .scene-card');
  if (await page.locator('#storyGrid .scene-card').count() !== 6) throw new Error('Storyboard did not render');
  await page.locator('#storyGrid .scene-card').nth(2).locator('.scene-edit').click();
  await page.waitForSelector('#titleInput');
  await page.locator('#titleInput').fill('A changed scene title');
  if ((await page.locator('#previewTitle').innerText()) !== 'A changed scene title') throw new Error('Inspector did not update preview');

  await page.getByRole('button', { name: 'Portrait' }).click();
  if (!(await page.locator('#canvas').evaluate(el => el.classList.contains('canvas-portrait')))) throw new Error('Portrait mode failed');

  await page.locator('#addSceneBtn').click();
  await page.waitForFunction(() => document.querySelector('#sceneCount')?.textContent?.trim() === '7 scenes');
  console.log('CUTLOOM_ADD', JSON.stringify({
    sceneCount: await page.locator('#sceneCount').innerText(),
    cards: await page.locator('#storyGrid .scene-card').count()
  }));

  await page.locator('.navbtn[data-screen="edit"]').click();
  const imageFixture = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect width="640" height="360" fill="#142033"/><circle cx="470" cy="100" r="80" fill="#d9ff4a"/><text x="36" y="300" fill="white" font-size="42">Cutloom Media</text></svg>');
  const videoFixture = await makeWebmFixture(page);
  if (!videoFixture) throw new Error('Browser cannot generate WebM fixture');
  const audioFixture = makeWavBuffer(1);

  await page.locator('#mediaFileInput').setInputFiles([
    { name: 'smoke-image.svg', mimeType: 'image/svg+xml', buffer: imageFixture },
    { name: 'smoke-video.webm', mimeType: 'video/webm', buffer: videoFixture },
    { name: 'smoke-audio.wav', mimeType: 'audio/wav', buffer: audioFixture }
  ]);
  await page.getByRole('button', { name: 'Assets' }).click();
  await page.waitForFunction(() => document.querySelectorAll('#assetsGrid .asset-media-card').length === 3);
  console.log('CUTLOOM_MEDIA_UPLOAD', JSON.stringify({
    uploaded: await page.locator('#assetsGrid .asset-media-card').count(),
    persistedStateAssets: await page.evaluate(() => JSON.parse(localStorage.getItem('cutloom:project:v2') || '{}').assets?.length || 0)
  }));

  await page.locator('.navbtn[data-screen="edit"]').click();
  const mediaOptions = await page.locator('#mediaSelect option').evaluateAll(options => options.map(o => ({ value: o.value, text: o.textContent })));
  const videoOption = mediaOptions.find(o => o.text.includes('smoke-video.webm'));
  const imageOption = mediaOptions.find(o => o.text.includes('smoke-image.svg'));
  if (!videoOption || !imageOption) throw new Error('Uploaded media missing from inspector options');

  const audioOptions = await page.locator('#audioSelect option').evaluateAll(options => options.map(o => ({ value: o.value, text: o.textContent })));
  const audioOption = audioOptions.find(o => o.text.includes('smoke-audio.wav'));
  if (!audioOption) throw new Error('Uploaded audio missing from inspector');

  await page.locator('#mediaSelect').selectOption(imageOption.value);
  await page.waitForFunction(() => !document.querySelector('#mediaImage')?.classList.contains('media-hidden'));
  if (!(await page.locator('#mediaImage').getAttribute('src')).startsWith('blob:')) throw new Error('Image object URL not connected');
  await page.locator('#mediaSelect').selectOption(videoOption.value);
  await page.locator('#audioSelect').selectOption(audioOption.value);
  await page.waitForFunction(() => !document.querySelector('#mediaVideo')?.classList.contains('media-hidden'));
  if (!(await page.locator('#mediaVideo').getAttribute('src')).startsWith('blob:')) throw new Error('Video object URL not connected');

  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForSelector('#canvas');
  await page.getByRole('button', { name: 'Assets' }).click();
  await page.waitForFunction(() => document.querySelectorAll('#assetsGrid .asset-media-card').length === 3);
  console.log('CUTLOOM_MEDIA_PERSIST', JSON.stringify({
    uploadedAfterReload: await page.locator('#assetsGrid .asset-media-card').count()
  }));

  await page.getByRole('button', { name: 'Edit' }).click();
  for (let i = 0; i < 6; i++) {
    await page.locator('#deleteBtn').click();
  }
  if ((await page.locator('#sceneCount').innerText()).trim() !== '1 scene') throw new Error('Scene reduction failed');
  await page.locator('#durationInput').fill('1');
  await page.locator('#mediaSelect').selectOption(videoOption.value);
  await page.locator('#audioSelect').selectOption(audioOption.value);

  const downloadPromise = page.waitForEvent('download', { timeout: 20000 });
  await page.locator('#renderBtn').click();
  const download = await downloadPromise;
  const filename = download.suggestedFilename();
  if (!filename.endsWith('.webm')) throw new Error('Render did not produce WebM');
  const path = await download.path();
  if (!path) throw new Error('Rendered download has no local path');
  const fs = require('fs');
  const size = fs.statSync(path).size;
  if (size < 1000) throw new Error(`Rendered WebM is unexpectedly small: ${size} bytes`);
  console.log('CUTLOOM_RENDER', JSON.stringify({ filename, bytes: size }));

  if (errors.length) throw new Error('Browser errors: ' + errors.join(' | '));
  console.log('CUTLOOM_SMOKE_OK', JSON.stringify({
    url: URL,
    media: { upload: true, persistence: true, render: true },
    scenes: 1
  }));
  await browser.close();
})().catch(err => {
  console.error(err);
  process.exit(1);
});
