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

The project stores its working state locally in the browser. The demo therefore does not create server-side customer records.

## Rendering path

The WebM draft renderer creates a Canvas matching the selected aspect ratio, captures it at 30fps, uses MediaRecorder with a supported WebM codec when available, and downloads the resulting Blob as a `.webm` file.

This is a demo-grade local pipeline, not a cloud transcoding service.

## Data portability

- Project JSON: editable source of truth for a Cutloom project.
- Shot-list CSV: scene-level handoff format.
- Contact-sheet HTML: human-readable review artifact.

## Deployment

The production demo is deployed as a Vercel static deployment under the `cutloom-demo` project.

## Recommended production architecture

A buyer moving toward production should separate concerns into:

- authenticated workspace + database;
- object storage for source media and renders;
- server-side media processing / FFmpeg;
- background render jobs;
- signed asset URLs;
- collaborative project/version model;
- AI provider abstraction;
- billing and usage metering.

## Security / privacy position

The MVP intentionally avoids collecting customer data server-side. This should not be presented as a compliance certification; it is simply a property of the current local-first architecture.