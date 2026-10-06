# RoleRadar

**Explainable identity access reviews for lean security teams.**

RoleRadar turns a routine identity export into a repeatable access-review workflow:

**Import -> Normalize -> Score -> Investigate -> Assign -> Resolve -> Re-run -> Export evidence**

## Live demo

https://roleradar-demo.vercel.app

## Current status

**Working B2B micro-SaaS MVP / pre-launch / pre-revenue**

The public demo is browser-local: identity exports are processed in the user's browser and can be persisted locally. No production customer data, live IdP credentials, or current revenue are claimed.

## Buyer snapshot

- Asking price: **$4,500 USD one-time**
- Best fit: security / IT consultants, MSPs, B2B SaaS teams, compliance-readiness products, IAM vendors, and founders seeking a focused security SaaS starting point
- Included: source code, live demo, synthetic sample dataset, risk engine, remediation workflow, policy editor, audit exports, documentation, and handoff-ready repository
- License: MIT
- No production dependencies: the MVP runs as a self-contained static app with no database or API keys required for the demo

## What works

- deterministic, explainable identity risk scoring;
- privileged-access / MFA checks;
- stale-account checks;
- dormant privileged-access checks;
- connected-app sprawl checks;
- disabled-account historical footprint checks;
- CSV import with quoted-field support, comma/semicolon delimiters, BOM handling and common header aliases;
- identity inventory with data-quality scoring;
- identity detail evidence view;
- remediation queue with Open / In Review / Resolved states;
- owner and due-date assignment;
- bulk remediation actions;
- editable policy thresholds and weights;
- local review history;
- CSV, JSON and HTML audit-report exports;
- responsive dashboard.

## Risk model

The MVP uses transparent rules rather than a black-box model.

| Signal | Default points |
| --- | ---: |
| Privileged access without MFA | 35 |
| Stale active identity | 25 |
| Dormant privileged access | 20 |
| Connected-app sprawl | 15 |
| Disabled identity retained in evidence | 10 |

Severity bands:

- Critical: 70+
- High: 45-69
- Medium: 20-44
- Low: 0-19

Thresholds and weights can be changed in **Policies**.

## Demo data

The demo uses synthetic Northstar Labs identities. They are fictional and are not customer, revenue, compliance, or security-certification evidence.

## Verification

The repository includes two GitHub Actions checks:

- source validation with Node syntax checking;
- live Chromium smoke testing against the public Vercel URL.

The live smoke flow covers loading the demo, identity inventory, findings/remediation, policy save, CSV export, JSON export, HTML report export, CSV import, reset, and browser error detection.

## Architecture and extension path

The MVP is intentionally easy to extend:

1. move browser-local state to Postgres;
2. add workspace authentication;
3. add Okta / Microsoft Entra / Google Workspace connectors;
4. add scheduled reviews;
5. add notifications / ticketing;
6. add billing and multi-tenant workspaces;
7. optionally add LLM-written explanations on top of deterministic signals.

## Repository

- index.html - self-contained working MVP
- sample-identities.csv - synthetic input data
- listing.md - acquisition listing
- valuation.md - pricing rationale
- docs/ACQUISITION_BRIEF.md - buyer-facing handoff brief
- LICENSE - MIT
.github/workflows/validate.yml - non-destructive source validation
.github/workflows/live-smoke.yml - public live browser smoke test
- e2e/live-smoke.cjs - Playwright smoke scenario

## Local run

No build step is required.

python -m http.server 4173

Then open http://127.0.0.1:4173

## Second product: MarginGuard

A separate working B2B micro-SaaS MVP is included under `marginguard/`.

**MarginGuard — Project profitability control for agencies and consultancies**

- Live demo: https://marginguard-demo.vercel.app
- Source: https://github.com/dmytri595-design/roleradar/tree/main/marginguard
- Asking price: **$4,900 one-time**
- Stage: working MVP / pre-launch / pre-revenue

MarginGuard monitors forecast project margin, hour burn and unbilled scope exposure, with CSV import/export, project details, configurable controls, alert workflow and portable reports.

## Acquisition positioning

RoleRadar is best positioned as a **focused, working security workflow** rather than a finished enterprise platform.

The buyer is acquiring a working product foundation, a specific B2B problem/positioning, an explainable risk engine, remediation workflow, audit artifacts, and a clear path to integrations and recurring revenue.

**Current asking price: $4,500 one-time.**

No MRR, customers, or traction are claimed.