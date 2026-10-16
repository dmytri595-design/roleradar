# HookForge — Webhook Reliability Lab

A local-first developer workbench for rehearsing webhook failure modes before production.

## Why it is different
HookForge is not a webhook request bin. It combines a repeatable chaos scenario library, retry-policy simulator, payload contract checks, a Web Crypto HMAC-SHA256 signature lab, reliability scoring, findings, and portable report history in one safe workspace.

## Included
- Scenario library with built-in and user-created recipes
- Payload editor with JSON validation, contract checks, and size feedback
- HMAC-SHA256 signature generation and tamper verification using Web Crypto
- Deterministic chaos drill: transient 503, persistent 500, 429, timeout, duplicates, out-of-order events, healthy path
- Retry strategy comparison: exponential backoff with jitter, fixed delay, or none
- Idempotency toggles and prioritized findings
- Timeline, reliability score, report history
- JSON/CSV report export and full workspace backup/import
- localStorage persistence and responsive UI
- No external endpoint is contacted by default

## Run
Open `index.html` in a modern browser, or serve this folder with any static server. No build step, package install, or secret is required.

## Honest limitations
Delivery outcomes are simulated locally. HookForge does not currently send webhooks to real endpoints, provide cloud/team sync, or integrate with GitHub/Stripe/Shopify. The signature lab generates HMAC-SHA256 but is an educational sandbox, not a drop-in verifier for every provider's timestamp/header format.

## Commercial position
Working MVP / pre-launch / pre-revenue. No customer or revenue claims. Suggested asset asking price: $4,900 one-time, subject to seller judgment.
