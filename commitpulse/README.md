# CommitPulse

**Supplier confirmations without the chasing.**

CommitPulse is a narrow procurement workflow product for small manufacturers, distributors and importers that already have an ERP or spreadsheet export but still chase suppliers manually for delivery-date and quantity commitments.

## Product workflow
1. Import an open-PO CSV export.
2. Review which POs are waiting, sent, confirmed or exceptions.
3. Group follow-ups by supplier.
4. Preview a no-login supplier request.
5. Supplier confirms all open POs in that request, or raises an exception with a note.
6. Export the normalized result back to CSV.

## Current implementation
- Self-contained HTML/CSS/JavaScript MVP.
- Browser-local persistence with localStorage.
- CSV import with column mapping and preview.
- Supplier grouping and response-rate view.
- Batch follow-up workflow.
- Supplier request URL shape: ?view=supplier&po=<PO_NUMBER>.
- No external API dependency for the demo.
- Synthetic demo data only.

## Important limitation
The live demo simulates delivery of supplier requests locally. It does not send email, authenticate supplier tokens, provide multi-user cloud storage, or write back to an ERP. Those are the production integration layers an acquirer can connect.

## Local run
Open index.html in a modern browser or serve the folder with any static web server.

## Release position
Working MVP / pre-launch / pre-revenue. No customer, user, revenue, or integration claims are made.

## Commercial
Suggested acquisition asking price: **$4,900 USD one-time**.

## Links
Live demo: https://commitpulse-demo.vercel.app
Repository: https://github.com/dmytri595-design/roleradar/tree/main/commitpulse
Standalone sale snapshot: https://github.com/dmytri595-design/roleradar/tree/commitpulse-sale-v1.0
