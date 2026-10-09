# CommitPulse Acquisition Brief — v1.2

## Executive summary
CommitPulse is a narrowly scoped procurement micro-SaaS for chasing supplier confirmations on open purchase orders.

## What is included
- Open-PO import with column mapping, preview, duplicate handling and basic validation
- Buyer dashboard, status/date/priority filters, supplier coverage
- Multi-PO grouped confirmation requests
- Supplier page for confirming quantity and date for each PO
- Exception Desk with accept/reopen decisions
- Reminder queue, grouped email drafts and follow-up logging
- PO create/edit with priority, unit price, internal note and next follow-up
- Analytics scorecards, supplier response ranking and report download
- CSV data exports, activity export, JSON backup and restore
- Workspace settings
- Playwright smoke test and GitHub Actions

## Architectural position
The current app is an intentionally lightweight static front-end. Data is stored in localStorage. It is a demonstrable workflow MVP, not a multi-user service.

## Production roadmap
1. Server-backed workspace storage and authentication.
2. Signed, expiring supplier links with access logging.
3. Transactional email + scheduled reminders.
4. ERP import/sync/write-back adapters.
5. Approval rules, roles, and supplier identity verification.

## Honest limitations
The browser-local demo cannot deliver real cross-device supplier links or send email. Imported data stays in the visitor browser unless explicitly exported.
