# Cutloom

**A browser-local video creation workspace for scripts, storyboards, captions, timelines and quick renders.**

Cutloom is intentionally different from analytics/admin SaaS. It behaves like a compact editing desk: a cinematic preview canvas in the center, a scene inspector on the right, and a multi-track timeline along the bottom.

## Live demo

https://cutloom-demo.vercel.app

## Current status

**Working creator-tool MVP / pre-launch / pre-revenue**

The demo runs locally in the browser. No account, database, API key or production media storage is required.

## What works

- cinematic edit workspace with responsive 16:9 and 9:16 preview;
- storyboard scene cards;
- scene inspector for title, kicker, caption, duration, motion and visual treatment;
- multi-track visual / caption / voiceover timeline;
- add, duplicate and delete scenes;
- browser-local project persistence with localStorage;
- forgiving project import and input normalization;
- script desk with timing metrics;
- visual asset shelf with instant scene styling;
- JSON project export;
- CSV shot-list export;
- HTML contact-sheet export;
- browser-side WebM rendering via Canvas + MediaRecorder when supported;
- keyboard shortcuts for save and playback;
- responsive layout without external runtime dependencies.

## Demo concept

The fictional demo is a 28-second launch reel. Scenes are synthetic; they are not customer content, revenue evidence, licensed footage or production integrations.

## Extension path

A buyer can extend the MVP with real media uploads, cloud projects, collaborative review, transcript import, TTS, stock-media connectors, AI storyboarding, brand kits, version history, billing and team workspaces.

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
