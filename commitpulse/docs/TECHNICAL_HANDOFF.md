# Technical Handoff — CommitPulse v1.2

## Runtime
- Single-page static app: `commitpulse/index.html`
- State: localStorage key `commitpulse:workspace:v2`
- Request relationships use request IDs with arrays of PO IDs.
- Binary uploads are not used; imports are CSV text.

## Features
- Buyer dashboard
- CSV import and mapping
- PO create/edit
- Supplier grouping and request creation
- Supplier-side multi-PO response
- Exception Desk
- Reminder queue and email-draft generation
- Analytics and report export
- JSON backup/restore
- Workspace settings and audit history

## Production replacement interfaces
- WorkspaceRepository.load/save
- PurchaseOrderRepository.list/create/update/import/export
- ConfirmationRequestRepository.create/getByToken/updateStatus
- MailProvider.createAndSend
- ReminderScheduler.schedule
- ERPAdapter.pullOpenPOs/pushSupplierCommitment

## Security priorities
Use authenticated buyer workspaces, strict server-side validation, signed expiring supplier tokens, rate limiting, trusted timestamps, tenant isolation, and access audit. Do not expose localStorage data as a security boundary.
