# Technical Handoff

## Architecture
index.html contains the complete front-end MVP.

State:
- commitpulse:workspace:v1 in localStorage.
- demo object supplies synthetic open-PO records.

Core functions:
- load / persist for state.
- render* functions for screen rendering.
- parseCSV / handleCSV / applyImport for imports.
- openBatch for supplier-grouped confirmation batches.
- renderSupplierView / respondSupplierGroup for supplier responses.
- exportCSV for normalized export.

## Request-link model
The demo uses:
?view=supplier&po=PO-1842

In production, replace this with a signed, expiring supplier token and a server-side request record.

## Production adapter boundary
Suggested interfaces:
- PORepository.listOpenPOs()
- ConfirmationRequest.create()
- ConfirmationRequest.send()
- ConfirmationRequest.getByToken()
- SupplierResponse.submit()
- PORepository.exportOrSync()

## Security priorities for production
- signed and expiring request tokens
- server-side validation
- audit timestamps from trusted server time
- buyer workspace authorization
- rate limiting on public supplier endpoints
