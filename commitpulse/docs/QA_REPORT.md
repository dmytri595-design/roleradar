# QA Report — CommitPulse v1.2

## Release scope
Exception Desk, Reminders, grouped email drafts, manual PO create/edit, priority filter, analytics, CSV price fields, JSON backup/restore, activity export, HTML operations report and workspace settings.

## Browser acceptance
**Status: PASS**

- GitHub Actions run: [37891003581](https://github.com/dmytri595-design/roleradar/actions/runs/37891003581)
- Tested commit: `60ab9d0ab890d3fde7e9f5607cc8ccc08dc78774`
- Result log: `{"ok":true,"overviewMetrics":5,"demoPOs":8,"groupedRequests":true,"multiPOView":1,"export":"commitpulse-visible-pos.csv"}`

## Covered scenarios
1. Initial metrics and attention queue.
2. Eight demo POs render in Open POs.
3. Select-all and grouped supplier request creation.
4. Supplier View opens and submits commitments for a multi-PO request.
5. Request state persists in localStorage before and after reload.
6. Exception acceptance clears the issue.
7. Reminder queue generates an email draft; the UI clearly states it is not sent.
8. Workspace name and reminder interval can be saved.
9. Manual PO creation stores the new record.
10. CSV import and export work.
11. Analytics cards render and weekly HTML report downloads.
12. JSON workspace backup downloads.
13. No browser errors were reported during this run.
14. Embedded JavaScript syntax gate passed.

## Current limitations
This remains a browser-local MVP. The demo does not send email, host server-backed supplier sessions, provide multi-user cloud persistence, authenticate buyers, or write back to an ERP. Supplier request state is browser-profile local; production requires a backend plus signed, expiring supplier tokens.

## Release positioning
Working MVP / pre-launch / pre-revenue. No customer, user, MRR or integration claims are made.
