# MarginGuard

**Project profitability control for agencies and consultancies.**

MarginGuard turns project fees, planned hours, logged delivery time and billing progress into an early-warning workflow:

**Import -> Calculate -> Flag -> Investigate -> Review -> Resolve -> Export**

## Live demo

https://marginguard-demo.vercel.app

## Status

**Working B2B micro-SaaS MVP / pre-launch / pre-revenue**

The demo is browser-local. Data is processed and persisted in the browser; no production client data or current revenue is claimed.

## Buyer snapshot

- Asking price: **$4,900 USD one-time**
- Best fit: creative agencies, software studios, consulting firms, MSPs, fractional operations teams, and vertical SaaS founders
- Included: working MVP, synthetic dataset, calculation engine, alert workflow, CSV import/export, JSON/HTML reports, documentation and clear extension path
- License: MIT
- Demo requires no database, API key or build step

## Core workflow

MarginGuard answers four questions early enough to act:

1. Which projects are below the desired forecast margin?
2. Which projects are burning hours faster than planned?
3. How much delivery value is currently exposed as unbilled scope?
4. Where is the team spending hours beyond the contracted plan?

## Implemented today

- forecast project gross margin;
- actual vs planned hours;
- forecast hours to completion;
- loaded hourly cost calculation;
- unbilled-scope exposure;
- configurable margin floor;
- configurable scope tolerance;
- configurable hour-overrun tolerance;
- project watchlist with risk states;
- project economics detail view;
- alert lifecycle: Open / In review / Resolved;
- CSV import with quoted-field support and delimiter detection;
- CSV export;
- JSON evidence-pack export;
- HTML report export;
- browser-local persistence;
- responsive dashboard.

## Transparent calculation model

Forecast delivery cost:

**(actual hours + remaining forecast hours) x loaded hourly cost**

Forecast gross margin:

**(project fee - forecast delivery cost) / project fee**

Signals raise the alert score when:

- forecast margin falls below the configured floor;
- actual hours exceed plan beyond the configured tolerance;
- unbilled scope exceeds the configured share of project value;
- forecast completion is above the original hour budget.

Risk bands:

- At risk: 60+
- Watch: 30-59
- Healthy: 0-29

## Demo data

The sample portfolio uses fictional projects and clients. It is demo material only.

## Extension path

The product can be upgraded without replacing the core logic:

1. connect Harvest / Toggl / Clockify / Jira / Linear / Asana;
2. add authenticated workspaces and Postgres;
3. ingest invoices and retainers;
4. add client-facing scope-change approvals;
5. add scheduled margin alerts;
6. add Slack / email notifications;
7. add Stripe and per-project / per-seat plans;
8. add consultant / MSP multi-client workspaces;
9. optionally add AI-written margin-review summaries.

## Quality

The source is a single self-contained HTML application. It is intentionally easy to audit, transfer and extend.

## Repository

- index.html - working MVP
- sample-projects.csv - synthetic dataset
- README.md - product documentation
- listing.md - acquisition listing
- valuation.md - pricing rationale
- docs/ACQUISITION_BRIEF.md - buyer-facing handoff brief
- LICENSE - MIT

## Local run

`python -m http.server 4183`

Then open http://127.0.0.1:4183

## Commercial disclosure

- MRR: $0
- Customers: none claimed
- TTM revenue: $0
- Profit: $0
- Stage: pre-launch / pre-revenue

No customer data, production integrations, certifications or revenue should be represented in a sale listing.