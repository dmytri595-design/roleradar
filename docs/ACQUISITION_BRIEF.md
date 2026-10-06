# RoleRadar
## Acquisition Brief

**Working B2B micro-SaaS MVP for explainable identity access reviews**

**Asking price: $4,500 USD - one-time acquisition**

### 1. Executive summary

RoleRadar is a focused security workflow that converts a routine identity export into a repeatable access-review process:

**Import -> Normalize -> Score -> Investigate -> Assign -> Resolve -> Re-run -> Export evidence**

The product is designed for lean security teams, consultants, MSPs, compliance-readiness products, and security/IAM vendors that need a practical access-review workflow without starting from zero.

The current product is a browser-local MVP. It is intentionally pre-launch and pre-revenue, so the buyer is purchasing working software, product positioning, and a clear expansion path rather than existing recurring revenue.

### 2. What is already built

**Risk intelligence**
- deterministic risk scoring;
- privileged-access without MFA detection;
- stale identity detection;
- dormant privileged-access detection;
- connected-app sprawl detection;
- disabled-account historical footprint detection;
- explainable signal-level reasons and severity bands.

**Review workflow**
- normalized identity inventory;
- identity evidence view;
- remediation findings;
- Open / In Review / Resolved lifecycle;
- owner and due-date assignment;
- bulk remediation actions;
- review history;
- configurable policy thresholds and weights.

**Data and evidence**
- CSV import;
- quoted-field parsing;
- comma and semicolon delimiters;
- BOM handling;
- common header aliases;
- CSV export;
- JSON evidence-pack export;
- HTML audit-report export;
- browser-local persistence.

### 3. Risk model

| Signal | Default points |
|---|---:|
| Privileged access without MFA | 35 |
| Stale active identity | 25 |
| Dormant privileged access | 20 |
| Connected-app sprawl | 15 |
| Disabled identity retained in evidence | 10 |

Severity bands:

| Score | Severity |
|---:|---|
| 70+ | Critical |
| 45-69 | High |
| 20-44 | Medium |
| 0-19 | Low |

Policies are editable in the product, so a buyer can tune thresholds and weights without rewriting the scoring engine.

### 4. Technology and operations

**Frontend/runtime:** self-contained HTML5, CSS3, vanilla JavaScript

**Persistence:** browser localStorage in the current MVP

**Hosting:** Vercel static deployment

**Quality automation:** GitHub Actions with Node validation and Playwright Chromium live smoke testing

**Dependencies for the demo:** none; no database, backend API, API key, or build step is required

**License:** MIT

This deliberately simple architecture keeps the MVP easy to audit, transfer, and extend.

### 5. Current commercial status

- Pre-launch
- Pre-revenue
- MRR: $0
- Customers: none claimed
- TTM revenue: $0
- Profit: $0

The demo dataset is fictional and exists only to show the workflow.

### 6. Live assets

**Live demo**

https://roleradar-demo.vercel.app

**Source repository**

https://github.com/dmytri595-design/roleradar

The repository includes the working application, sample CSV data, acquisition listing, valuation memo, and automated QA workflows.

### 7. Verification status

The public demo has been browser-smoke-tested with Chromium.

The smoke flow covers:
- loading the demo;
- calculating the dashboard;
- opening Identities;
- opening Findings;
- moving a finding into review;
- saving a policy change;
- CSV export;
- JSON export;
- HTML report export;
- CSV import;
- recalculation after import;
- reset;
- browser console/page error detection.

The current test suite is intended to catch regressions in the customer-facing flow rather than only syntax errors.

### 8. Buyer fit

Best suited to a buyer that already has one of:
- security / IT consulting clients;
- an MSP customer base;
- an IAM or security product;
- a compliance-readiness offering;
- a B2B SaaS distribution channel.

A buyer with distribution can turn the existing workflow into a recurring service or add-on much faster than building the product foundation from scratch.

### 9. Highest-value expansion path

**Phase 1 - production foundation**
- workspace authentication;
- Postgres persistence;
- multi-tenant data model;
- audit logging.

**Phase 2 - integrations**
- Okta;
- Microsoft Entra;
- Google Workspace.

**Phase 3 - recurring operations**
- scheduled reviews;
- notifications;
- ticketing integrations;
- policy templates.

**Phase 4 - monetization**
- Stripe billing;
- plans by identities/workspaces;
- consultant / MSP packaging.

**Optional product layer**
- LLM-assisted explanations or report drafting on top of the deterministic engine.

### 10. What the buyer receives

- full source code;
- live demo;
- synthetic sample data;
- deterministic risk engine;
- policy editor;
- remediation workflow;
- audit/report exports;
- repository documentation;
- MIT license;
- clean one-time handoff structure.

### 11. Commercial terms

**Asking price:** $4,500 USD

**Payment model:** One-Time Payment

No ongoing seller involvement is required by the intended transaction structure.

### 12. Pricing note

The $4,500 ask is an early-stage asset price, not a revenue-multiple valuation. Public market examples used to set the anchor are asking prices rather than verified transaction values. The price is deliberately below the $5,000 range cited by AICRAYS for early-stage micro-SaaS acquisitions and below more developed $8k-$9k marketplace examples reviewed for context.

A likely negotiation zone is approximately $3,500-$4,200, with around $3,000 treated as a fast-sale floor.

### 13. Disclosure

RoleRadar should be presented accurately as a **working MVP / pre-launch / pre-revenue** product.

Do not claim:
- customers;
- MRR or ARR;
- compliance certification;
- production identity-provider integrations;
- production security attestations;
- customer data.

Demo identities are synthetic.

**Review date: October 6, 2026**