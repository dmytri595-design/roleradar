# RoleRadar

**Explainable identity access reviews for lean security teams.**

RoleRadar turns a routine identity export into a repeatable access-review workflow: normalize the data, calculate an explainable risk score, turn findings into remediation tasks, tune the review policy, track review snapshots, and export portable evidence.

## Live demo

https://roleradar-demo.vercel.app

## What is implemented

- Command Center with posture score, open findings, privileged identities, stale accounts and posture trend.
- CSV import wizard with preview and source-column mapping.
- Automatic alias detection for common identity export headers.
- Browser-local processing with localStorage persistence.
- Transparent risk engine with configurable thresholds and weights.
- Identity inventory with data-quality checks.
- Identity detail drawer with evidence and remediation actions.
- Findings queue with open / in-review / resolved states.
- Owner and due-date tracking for remediation findings.
- Bulk resolution for selected findings.
- Policy editor with immediate score refresh.
- Review history snapshots.
- Executive brief with posture summary and key metrics.
- CSV export.
- JSON evidence-pack export.
- Standalone HTML audit-report export.
- Responsive dashboard for desktop and tablet.

## Supported source shape

`name,email,role,department,last_login,mfa,admin,apps,status`

The importer also recognizes common aliases such as `full_name`, `mail`, `job_title`, `team`, `last_sign_in`, `mfa_enabled`, `is_admin`, `app_count`, and `state`.

## Risk model

RoleRadar intentionally avoids a black-box score in the MVP.

Default signals:

| Signal | Default weight |
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

All thresholds and weights are editable inside **Policies**.

## Privacy boundary

This MVP processes imported identity data in the browser. No server-side identity database or live IdP connection is included.

That is deliberate: the buyer gets a working workflow and an obvious integration path without requiring API keys for the demo.

## Architecture / extension path

The product is intentionally small and easy to acquire.

Recommended production extension:

1. Next.js / React frontend
2. Managed authentication
3. Postgres for workspaces, identities, findings and review snapshots
4. Connector adapters for Okta, Microsoft Entra and Google Workspace
5. Scheduled reviews
6. Email / Slack / ticketing notifications
7. Multi-tenant billing

## Repository structure

```
index.html                 # complete working MVP
sample-identities.csv     # synthetic demo input
listing.md                 # acquisition listing copy
.github/workflows/         # keeps the live demo source mirrored into GitHub
LICENSE                    # MIT
```

## Local run

No build step is required.

```
python -m http.server 4173
```

Open http://127.0.0.1:4173

## Demo data disclosure

All identities in `sample-identities.csv` are synthetic. No real customers, security certifications, revenue, or production identity integrations are claimed.

## Acquisition positioning

RoleRadar is best positioned as a **working B2B micro-SaaS MVP / acquisition asset**, not as a finished enterprise security platform.

The strongest buyer story is the workflow already implemented today plus the short path to native IdP connectors, persistent multi-user workspaces and recurring reviews.


## Build
Version 1.2.1 hardening pass.
