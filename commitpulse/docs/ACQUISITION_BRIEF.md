# CommitPulse Acquisition Brief

## Executive summary
CommitPulse is a narrowly scoped B2B procurement workflow designed to eliminate repetitive supplier chasing around open purchase orders.

## Workflow
Import → Triage → Batch by supplier → Supplier confirmation → Exceptions → Export

The current demo is intentionally browser-local so the core workflow is easy to evaluate without account setup or infrastructure.

## Product surface
- Overview
- Open POs
- Suppliers
- Import / column mapping
- Supplier View
- Activity audit trail
- CSV export

## Current differentiator
The product is not a procurement suite. It is the missing confirmation loop between an existing PO system and a reliable supplier commitment.

## Technical handoff
The static UI/state layer is separated conceptually from the future persistence and communications adapters. A buyer can connect:
- database/authentication
- signed supplier tokens
- transactional email
- scheduled reminders
- ERP/CSV sync
- role-based access

## Limitations
No email provider, cloud database, ERP write-back, authenticated supplier token or multi-user collaboration is included in v1.0.

## Commercial position
Working MVP / pre-launch / pre-revenue. Suggested asking price: $4,900 USD one-time.
