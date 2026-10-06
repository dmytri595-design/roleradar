# RoleRadar

**Explainable identity access reviews for lean security teams.**

RoleRadar turns a routine identity export into a repeatable access-review workflow:

**Import → Normalize → Score → Investigate → Assign → Resolve → Re-run → Export evidence**

## Live demo

https://roleradar-demo.vercel.app

## Current status

**Working B2B micro-SaaS MVP / pre-launch / pre-revenue**

The current MVP is browser-local. Identity exports are processed in the user's browser and can be persisted locally. No production customer data, live IdP credentials, or current revenue are claimed.

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
- High: 45–69
- Medium: 20–44
- Low: 0–19

Thresholds and weights can be changed in **Policies**.

## Demo data

The demo uses synthetic Northstar Labs identities. They are fictional and are not customer, revenue, compliance or security-certification evidence.

## Architecture

The product is deliberately easy to extend:

1. move browser-local state to Postgres;
2. add workspace authentication;
3. add Okta / Microsoft Entra / Google Workspace connectors;
4. add scheduled reviews;
5. add notifications / ticketing;
6. add billing and multi-tenant workspaces;
7. optionally add LLM-written explanations on top of deterministic signals.

## Repository

- `index.html` — self-contained working MVP
- `sample-identities.csv` — synthetic input data
- `listing.md` — acquisition listing
- `valuation.md` — pricing rationale
- `LICENSE` — MIT
- `.github/workflows/validate.yml` — non-destructive source validation

## Local run

No build step is required:

```bash
python -m http.server 4173
```

Then open http://127.0.0.1:4173

## Acquisition positioning

RoleRadar is best positioned as a **focused, working security workflow** rather than a finished enterprise platform.

The buyer is purchasing a working product foundation, a specific B2B problem/positioning, an explainable risk engine, remediation workflow and a clear path to integrations and recurring revenue.

**Current asking price: $4,500 one-time.**

No MRR or customer traction is claimed.
