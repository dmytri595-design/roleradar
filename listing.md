# RoleRadar — Acquisition Listing

## Product Name
RoleRadar

## One-line pitch
Explainable identity access reviews for lean security teams.

## What the buyer gets
A polished working MVP that turns identity CSV exports into:

- risk-scored identities with transparent reasons;
- prioritized findings and remediation states;
- configurable policy thresholds and scoring weights;
- review-history snapshots;
- executive summary metrics;
- CSV, JSON and standalone HTML evidence exports.

## Current status
Working MVP / Pre-launch / Pre-revenue.

The current product is browser-only. Imported data is processed locally and persisted in localStorage for the demo.

## Target users
Startup IT/security leads, MSPs, agencies, B2B SaaS teams preparing for customer security reviews, and consultants running recurring access reviews.

## Why the problem is valuable
Access reviews are repetitive, deadline-driven work. The raw data often exists already, but teams still need to normalize users, spot stale or privileged access, explain the risk and produce evidence.

RoleRadar packages those steps into one focused workflow.

## Differentiation
This is deliberately not a generic AI chat wrapper.

The core value is the workflow:
**Import → Normalize → Score → Investigate → Assign → Resolve → Re-run → Export evidence**

The risk model is explicit, editable and easy for a buyer to replace with native policy logic.

## Commercial hypothesis
Suggested future plans after adding persistent workspaces and IdP connectors:

- Starter — $29/mo
- Team — $89/mo
- MSP — $249/mo

These are pricing hypotheses, not current revenue.

## Current traction
$0 MRR.

No users, customers or revenue are claimed.

## Asking price
**$4,500 one-time**

Negotiable for a fast acquisition or structured handoff.

## Why it can be worth more than a small code demo
The buyer is not purchasing only a static dashboard. The acquisition includes:

- the product concept and positioning;
- working risk/review workflow;
- configurable policy engine;
- remediation state machine;
- local persistence;
- import normalization;
- exportable evidence artifacts;
- responsive UI;
- clear production extension path.

## Highest-value next steps for the buyer

### Phase 1
Move the local state model to Postgres and add authentication.

### Phase 2
Add Okta / Microsoft Entra / Google Workspace connectors.

### Phase 3
Add scheduled reviews and notifications.

### Phase 4
Add multi-tenant workspaces, billing and an MSP mode.

### Phase 5
Add behavioral signals and optional LLM-generated explanations on top of the deterministic policy engine.

## Live demo
https://roleradar-demo.vercel.app

## Repository
https://github.com/dmytri595-design/roleradar

## Disclosure
RoleRadar is an MVP acquisition asset. Demo identities are synthetic. No production identity data, customers, compliance certifications or revenue are represented.
