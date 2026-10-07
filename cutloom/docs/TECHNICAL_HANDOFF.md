# Cutloom - technical handoff

## Runtime

Cutloom is a static web application. It does not require Node.js to run the product itself.

Local run:

```bash
python -m http.server 4170 --directory cutloom
```

Open http://127.0.0.1:4170.

## Source structure

```
cutloom/
  index.html
  sample-project.json
  README.md
  listing.md
  valuation.md
  SUBMISSION_FORM.md
  LICENSE
  docs/
  e2e/
```

## Browser state

Project metadata and scene references are stored in localStorage. Uploaded binary media is stored in IndexedDB and reconstructed into temporary object URLs on reload. The demo therefore does not create server-side customer records.

## Rendering path

The local renderer creates a Canvas matching the selected aspect ratio, composites uploaded image/video media with scene text, applies simple motion treatment, captures the canvas at 30fps, mixes assigned scene audio through Web Audio's `MediaStreamDestination` when available, clips each audio source to its scene duration, then records the combined stream with a supported WebM MediaRecorder codec.

The renderer is intentionally browser-local. It can produce real WebM drafts from uploaded media, but it is not a cloud transcoder and does not promise universal MP4/codec support.

## Data portability

- Project JSON: editable source of truth for a Cutloom project, including media metadata and scene references.
- Shot-list CSV: scene-level handoff format.
- Contact-sheet HTML: human-readable review artifact; compatible local image/video assets can be embedded in the exported file.

## Deployment

The production demo is deployed as a Vercel static deployment under the `cutloom-demo` project.

## Recommended production architecture

A buyer moving toward production should separate concerns into:

- authenticated workspace + database;
- object storage for source media and renders;
- server-side media processing / FFmpeg for MP4/H.264 and long-form renders;
- background render jobs;
- signed asset URLs;
- collaborative project/version model;
- AI provider abstraction;
- billing and usage metering.

## Security / privacy position

The MVP intentionally avoids collecting customer data server-side. This should not be presented as a compliance certification; it is simply a property of the current local-first architecture.