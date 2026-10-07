# Cutloom

**A browser-local video creation workspace for scripts, storyboards, captions, timelines and quick renders.**

Cutloom is intentionally different from analytics/admin SaaS. It behaves like a compact editing desk: a cinematic preview canvas in the center, a scene inspector on the right, and a multi-track timeline along the bottom.

## Live demo

https://cutloom-demo.vercel.app

## Current status

UI / media release: v1.3

**Working creator-tool MVP / pre-launch / pre-revenue**

The demo runs locally in the browser. No account, database or API key is required. Uploaded media files are stored in the browser's IndexedDB; project metadata is stored in localStorage.

## What works

- cinematic edit workspace with responsive 16:9 and 9:16 preview;
- storyboard scene cards;
- scene inspector for title, kicker, caption, duration, motion and visual treatment;
- multi-track visual / caption / voiceover timeline;
- add, duplicate and delete scenes;
- browser-local project persistence with localStorage;
- forgiving project import and input normalization;
- script desk with timing metrics;
- visual asset shelf with synthetic treatments and real local image/video/audio uploads;
- per-scene media assignment with Cover / Contain / Fill fit modes;
- per-scene video start offset and audio volume controls with scene-duration audio clipping;
- drag-and-drop media import plus delete/clear asset management;
- IndexedDB persistence for uploaded media across reloads;
- JSON project export with asset metadata;
- self-contained contact-sheet HTML export that embeds compatible local media (with size safeguards for video);
- CSV shot-list export;
- HTML contact-sheet export;
- browser-side WebM rendering from Canvas frames plus uploaded image/video media and optional Web Audio track, with scene-bounded audio playback;
- keyboard shortcuts for save and playback;
- real storyboard reordering and scene move controls;
- responsive layout without external runtime dependencies.

## Demo concept

The fictional demo is a 28-second launch reel. Synthetic scenes are still included, but the editor can now ingest real local media files. No customer content, revenue evidence, licensed footage or production integrations are claimed.

## Extension path

A buyer can extend the MVP with cloud projects, collaborative review, transcript import, TTS, stock-media connectors, AI storyboarding, brand kits, version history, billing and team workspaces. Server-side FFmpeg / MP4 export remains a production extension.

## Repository files

- `index.html` — self-contained product
- `sample-project.json` — synthetic demo project
- `listing.md` — acquisition listing
- `valuation.md` — pricing rationale
- `e2e/live-smoke.cjs` — Playwright smoke test
- `.github/workflows/cutloom-live-smoke.yml` — live browser verification
- `LICENSE` — MIT

## Local run

No build step is required.

```bash
python -m http.server 4170
```

Then open `http://127.0.0.1:4170`.
