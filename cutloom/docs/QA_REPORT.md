# Cutloom - QA report

## Verification status

**Latest GitHub Actions live smoke:** SUCCESS  
**Public URL:** https://cutloom-demo.vercel.app  
**Verified flow:** Chromium browser against the public production alias

## Current release coverage

The v1.2 smoke suite verifies the production editor rather than only API availability. It exercises:

- HTTP response and application initialization;
- six-scene demo dataset;
- storyboard rendering and scene editing;
- 16:9 / 9:16 mode;
- add-scene flow and scene deletion;
- real local image, video and audio upload;
- IndexedDB persistence across a full page reload;
- media assignment into a scene;
- media object URLs restored after reload;
- browser-side WebM rendering using uploaded video and scene audio;
- successful `.webm` download with a non-trivial output size;
- browser console/page error collection.

## Latest run evidence

GitHub Actions run: `37590619718`  
Job: `112690953473`  
Conclusion: `success`

Observed output:

```
CUTLOOM_STATE ... "6 scenes" ... indexedDB:true
CUTLOOM_ADD ... "7 SCENES"
CUTLOOM_MEDIA_UPLOAD {"uploaded":3,"persistedStateAssets":3}
CUTLOOM_MEDIA_PERSIST {"uploadedAfterReload":3}
CUTLOOM_RENDER {"filename":"launch-reel-september.webm","bytes":155404}
CUTLOOM_SMOKE_OK {"media":{"upload":true,"persistence":true,"render":true},"scenes":1}
```

## Production deployment evidence

Latest production deployment: `dpl_6DxtFPGG1QLcTydCGwrfWwKwv8bY`  
Ready state: `READY`  
Production alias: https://cutloom-demo.vercel.app

## What this proves

The current MVP can accept browser-supported local image/video/audio files, persist them locally, assign them to scenes, preview them and render a real WebM draft in Chromium with optional scene audio.

## Boundaries

The smoke test does not certify every browser/codec combination, very long renders, large production media libraries, server-side storage, MP4/H.264 export, cloud collaboration, AI integrations, or production-scale background rendering. Those remain separate production extensions.