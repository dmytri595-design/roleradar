# MarginGuard
## Acquisition Brief

**Project profitability control for agencies and consultancies**

**Asking price: $4,900 USD - one-time acquisition**

### 1. Executive summary

MarginGuard is a focused B2B workflow for service businesses that sell fixed-fee or capacity-based project work.

It converts a routine project export into a repeatable economics review:

**Import -> Calculate -> Flag -> Investigate -> Review -> Resolve -> Export**

The core promise is simple: detect margin erosion while the project is still running, not after the final invoice.

The current product is a browser-local MVP. It is intentionally pre-launch and pre-revenue.

### 2. What is already built

**Project economics**
- fixed fee / contract value;
- planned hours;
- actual logged hours;
- forecast remaining hours;
- loaded hourly cost;
- forecast delivery cost;
- forecast gross margin;
- hours burn;
- unbilled scope exposure.

**Decision workflow**
- automatic risk scoring;
- At risk / Watch / Healthy states;
- alert queue;
- risk states and alert queue;
- project detail evidence;
- configurable business thresholds.

**Data and evidence**
- CSV import;
- comma / semicolon delimiter detection;
- quoted fields;
- common header aliases;
- CSV export;
- JSON evidence-pack export;
- HTML report export;
- local browser persistence.

### 3. Calculation model

Forecast hours:

**actual hours + remaining forecast hours**

Forecast delivery cost:

**forecast hours x loaded hourly cost**

Forecast gross margin:

**(fee - forecast delivery cost) / fee**

The risk score increases when delivery economics deteriorate through margin compression, hour overruns, unbilled scope exposure, or forecast completion above the original budget.

### 4. Technology

**Frontend/runtime:** self-contained HTML5, CSS3 and vanilla JavaScript

**Persistence:** browser localStorage

**Hosting target:** Vercel static deployment

**Dependencies:** none required for the demo

**License:** MIT

The current architecture is intentionally small so that a buyer can audit the product quickly and move it into a production stack.

### 5. Demo

**Live demo**

https://marginguard-demo.vercel.app

**Repository**

https://github.com/dmytri595-design/roleradar/tree/main/marginguard

The demo uses fictional projects and clients.

### 6. Commercial status

- Pre-launch
- Pre-revenue
- MRR: $0
- Customers: none claimed
- TTM revenue: $0
- Profit: $0

### 7. Buyer fit

Best fits include:

- creative agencies;
- digital studios;
- software development shops;
- consulting firms;
- MSPs;
- fractional CFO / operations practices.

The most strategic buyer is one that already owns a distribution channel into service businesses.

### 8. Product expansion

**Integrations**
- Harvest;
- Toggl;
- Clockify;
- Jira;
- Linear;
- Asana;
- QuickBooks / Xero / Stripe invoicing data.

**Production foundation**
- authentication;
- Postgres;
- multi-tenant workspaces;
- audit logs.

**Workflow**
- scheduled reviews;
- client scope-change approvals;
- notifications;
- Slack / email;
- margin snapshots.

**Commercial**
- Stripe billing;
- plans by projects / seats;
- consultant and MSP multi-client mode.

**Optional AI**
- plain-language weekly margin summaries;
- suggested actions;
- draft client change-order language.

### 9. What the buyer receives

- complete source code;
- live demo;
- synthetic sample dataset;
- calculation and risk engine;
- alert workflow;
- configurable controls;
- CSV / JSON / HTML reporting;
- acquisition documentation;
- MIT license.

### 10. Commercial terms

**Asking price:** $4,900 USD

**Payment model:** One-Time Payment

The intended transaction is a clean asset handoff with no required ongoing seller involvement.

### 11. Pricing note

Current 2026 SaaS marketplace guidance emphasizes profit multiples for operating businesses, while pre-revenue assets require a different approach. MarginGuard is therefore priced as a working niche product asset with a live demo, not as a business with invented revenue.

Acquire.com's current seller guidance also notes that pre-revenue offerings are curated more selectively and need a useful or niche purpose plus a strong presentation.

### 12. Disclosure

Present the project as:

**Working MVP / pre-launch / pre-revenue**

Do not claim customers, revenue, certifications, production integrations, or customer data.

Demo values are synthetic.

**Review date: October 6, 2026**