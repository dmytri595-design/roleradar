# QA Report — CommitPulse v1.2

## Release scope
Exception Desk, Reminders, email drafts, PO create/edit, priority filter, analytics, CSV price fields, JSON backup/restore, activity export, HTML operations report and workspace settings.

## Acceptance
The GitHub Actions browser smoke should cover:
1. Initial metrics and attention queue
2. Open POs and select-all
3. Grouped confirmation request creation
4. Multi-PO supplier page and submit
5. Request persistence before and after reload
6. Exception acceptance
7. Reminder email draft and follow-up logging
8. Workspace settings persistence
9. Manual PO creation/edit
10. CSV import and export
11. Analytics export/report
12. No page errors

## Limits
The static product is browser-local. No backend, email delivery, authentication, signed tokens, or ERP integration is included.
