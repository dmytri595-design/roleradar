# Cutloom - acquisition brief

## 1. Executive summary

Cutloom is a self-contained, browser-local creator-tool MVP for turning a script into a sequence of scenes, captions, a visual storyboard, a multi-track timeline and a shareable WebM draft.

The product is intentionally positioned as an **editing workspace**, not a generic admin dashboard. The central experience is a cinematic preview canvas surrounded by scene controls, story structure and timeline context.

**UI / media release:** v1.2  
**Status:** Working MVP / pre-launch / pre-revenue  
**Paying users:** 0 claimed  
**Monthly revenue:** $0 claimed  
**Asking price:** $4,900 USD one-time  
**Demo:** https://cutloom-demo.vercel.app

## 2. User workflow

**Write -> Shape scenes -> Style -> Sequence -> Preview -> Export**

The current demo supports project-level composition and format selection, scene selection from storyboard or timeline, scene editing, 16:9 / 9:16 preview, script editing, visual presets, real local image/video/audio import, per-scene media assignment, cover/contain/fill fitting, video start offsets, audio volume, IndexedDB media persistence, scene reordering, JSON/CSV/HTML exports, and browser-side WebM rendering from media plus optional audio where the required APIs are available.

## 3. UX differentiator

The UI is deliberately built around creative flow rather than CRUD patterns:

- **Preview:** judge the scene as a viewer.
- **Inspector:** make precise scene edits.
- **Storyboard:** think in narrative beats.
- **Timeline:** think in rhythm and sequence.
- **Script:** maintain the spoken/caption layer.
- **Assets:** rapidly change visual direction.
- **Export:** package the cut for review.

This makes the MVP visually and behaviorally distinct from analytics, finance and security dashboards.

## 4. Technical snapshot

- Static HTML/CSS/JavaScript application.
- No framework or build step required for the product demo.
- No backend or API key required for the demo.
- Project metadata uses localStorage; uploaded binary assets use IndexedDB.
- WebM rendering composites uploaded image/video media with Canvas capture plus MediaRecorder, with optional Web Audio mixing for assigned audio.
- JSON, CSV and HTML export paths are included.
- User-entered text is escaped before being inserted into exported HTML.
- Responsive UI supports desktop and smaller screens.

## 5. Current infrastructure

**Vercel project:** `cutloom-demo`  
**Production alias:** https://cutloom-demo.vercel.app  
**Latest verified production deployment:** READY  
**Repository:** https://github.com/dmytri595-design/roleradar/tree/main/cutloom

The live browser smoke test runs through GitHub Actions against the public production URL.

## 6. Demo data

The included launch-reel project is fictional and synthetic. It is not customer work, a licensed media library, or commercial performance evidence.

## 7. Extension roadmap

**Phase 1 - production media**
- cloud object storage and synced projects;
- proxy media and production thumbnail pipeline;
- advanced trimming and real timeline media blocks;
- server-side FFmpeg / MP4 rendering.

**Phase 2 - collaborative SaaS**
- authentication;
- cloud project storage;
- shareable review links;
- comments, approvals and version history.

**Phase 3 - AI creator layer**
- AI script-to-storyboard;
- caption rewriting;
- transcript-to-cuts;
- TTS / voiceover;
- AI scene suggestions.

**Phase 4 - monetization**
- subscriptions;
- team seats;
- render quotas;
- premium templates;
- usage-based AI billing.

## 8. Deal scope

The sale is for the Cutloom product asset as represented in the seller-provided package: source code, demo materials, synthetic sample project, documentation, test workflow and product-specific handoff material.

The buyer should separately confirm whether they require a standalone GitHub repository, Vercel project transfer, custom domain ownership, branding/trademark rights, or post-close development support. None of these are silently implied.

## 9. Limitations disclosed up front

- no production customers;
- no revenue;
- no cloud persistence;
- no cloud media storage or server-side transcoding;
- no built-in collaboration;
- no AI provider integration in the MVP;
- WebM rendering depends on browser support for Canvas capture, MediaRecorder and optional Web Audio APIs;
- the public GitHub product lives in a dedicated `cutloom/` directory inside a broader repository; a standalone sale snapshot can be prepared from the Cutloom-only files.

## 10. Buyer handoff outcome

A technical buyer can run the product locally, inspect the complete source, open the public demo, run the included browser smoke test and start replacing synthetic visual treatments with real media infrastructure.