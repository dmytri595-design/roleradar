# CommitPulse Acquisition Brief

## Executive summary
CommitPulse is a narrow B2B workflow that closes the gap between an existing PO system and a reliable supplier commitment.

## v1.1 product loop
1. Import an open-PO CSV export.
2. Review near-term and exception records.
3. Select POs or work supplier-by-supplier.
4. Create one request per supplier.
5. Share/copy the supplier link.
6. Supplier reviews multiple POs and confirms date + quantity for each.
7. Any changed date, quantity or note becomes an exception.
8. Buyer sees request progress and audit events.
9. Export the normalized PO dataset.

## Differentiation
CommitPulse is intentionally not an ERP, supplier master-data system, inventory suite or procurement platform. It is a thin confirmation loop that can sit beside those systems.

## Technical handoff
Current state is browser-local. Production adapter points:
- PO repository
- request/token service
- transactional email
- scheduled reminders
- authentication/RBAC
- ERP sync
- server-side audit store

## Current limitations
No production email, signed request tokens, cloud database, multi-user workspace or ERP write-back in v1.1.

## Commercial position
Working MVP / pre-launch / pre-revenue. Suggested asking price: $4,900 USD one-time.
