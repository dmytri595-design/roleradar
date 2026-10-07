# Cutloom - QA report

## Verification status

**Latest GitHub Actions live smoke:** SUCCESS  
**Public URL:** https://cutloom-demo.vercel.app  
**Verified flow:** Chromium browser against the public production alias

## Covered by smoke test

- HTTP response check;
- product initialization;
- demo title and six-scene dataset;
- storyboard rendering;
- scene selection;
- inspector text editing;
- 9:16 portrait mode;
- add-scene flow;
- scene-count update and storyboard count;
- CSV export download;
- MediaRecorder availability;
- Canvas captureStream availability;
- browser console/page error collection.

## Latest run evidence

GitHub Actions run: `37579074000`  
Workflow: `Cutloom live smoke`  
Conclusion: `success`

A preceding v1.1 UI/source verification run also completed successfully: `37578978813`.

## Product boundaries

The live smoke test validates the production UI and the browser recording APIs. It does not claim end-to-end validation of long-form rendering, third-party media upload, cloud persistence or AI integrations because those systems are not part of the MVP.