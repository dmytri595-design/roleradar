# CommitPulse

**Supplier confirmations without the chasing.**

CommitPulse is a focused procurement workflow for small manufacturers, distributors and importers that already have an ERP or spreadsheet export but still chase suppliers manually for delivery-date and quantity commitments.

## Core workflow
Import open POs → triage → select → create grouped supplier requests → supplier confirms multiple POs in one response → exceptions are surfaced → export.

## v1.1 highlights
- Multi-PO supplier confirmation requests.
- Persistent request center with request IDs.
- Copyable supplier links using `?view=supplier&request=RQ-XXXX`.
- Supplier can confirm quantity + date for every PO in one request.
- Exceptions are automatically identified when date, quantity, or note changes.
- Request status and progress tracking.
- Select-all, filters and correct visible-row CSV export.
- Legacy v1 workspace migration.
- Responsive operations UI with clear buyer/supplier separation.

## Current implementation
- Self-contained HTML/CSS/JavaScript.
- localStorage persistence.
- CSV import with column mapping and preview.
- Supplier grouping and response-rate views.
- Request center and audit trail.
- No external API dependency for the demo.
- Synthetic demo data only.

## Honest limitations
The live demo simulates request delivery locally. It does not send email, authenticate supplier tokens, provide shared cloud persistence, or write back to an ERP. Production should add signed expiring links, authenticated storage, transactional email and ERP adapters.

## Release position
Working MVP / pre-launch / pre-revenue. No customer, user, revenue, or integration claims are made.

## Commercial
Suggested acquisition asking price: **$4,900 USD one-time**.
