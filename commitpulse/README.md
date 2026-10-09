# CommitPulse v1.2

**Supplier confirmations without the chasing.**

CommitPulse is a focused procurement workflow for manufacturers, importers and distributors who already use an ERP or spreadsheet export but still chase suppliers manually for delivery dates and quantities.

## Buyer workflow
1. Import an open-PO CSV with column mapping and preview.
2. Filter the queue by text, status, date risk and priority.
3. Create grouped confirmation requests, one per supplier.
4. Let a supplier confirm date and quantity for multiple POs in one request.
5. Review changed commitments in the Exception Desk.
6. Generate supplier-ready email drafts and log follow-up cycles.
7. Measure response/on-time performance.
8. Export PO data, analytics, activity history, HTML reports or a full JSON backup.

## v1.2 capabilities
- Overview and attention queue
- Open POs with filters, priority, manual create/edit
- Supplier coverage and response-rate view
- Request Center with local shareable request URLs
- Multi-PO supplier confirmation and exceptions
- Exception Desk with accept-proposal and reopen actions
- Reminder queue with next-follow-up dates
- Grouped email drafts with copy and mail-app handoff
- Analytics scorecards and supplier ranking
- CSV import with column mapping, date/quantity validation and duplicate skipping
- CSV export covering price, priority and follow-up fields
- JSON backup / restore
- Activity CSV export
- HTML weekly operations report download
- Workspace settings for name, reminder cadence, due-soon window and currency
- Browser persistence via localStorage
- Responsive UI and Playwright smoke test

## Important limits
This is a browser-local MVP. Supplier links resolve only in the same browser profile because state lives in localStorage; the app does not send emails, host shareable server-backed supplier sessions, authenticate users, persist data in the cloud, or write to an ERP. A production release needs a backend, signed expiring tokens, transactional email, and integration adapters.

## Status
Working MVP / pre-launch / pre-revenue. No customer, user, revenue or ERP integration claims.

Suggested asking price: **$4,900 USD one-time**.
