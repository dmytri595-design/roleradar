# QA Report

## Local validation
- HTML generated successfully.
- Embedded JavaScript passes node --check.
- A local Chromium headless launch was attempted, but the container browser process hung, so it is not treated as an acceptance result.

## Required acceptance path
The GitHub Actions browser smoke test covers:
1. live page loads
2. overview metrics render
3. Open POs navigation
4. batch modal opens
5. confirmation batch changes waiting records to sent
6. supplier view renders
7. supplier confirmation updates order state
8. state survives reload
9. CSV import maps and adds a new PO
10. CSV export triggers a download

## Release policy
The release should not be positioned as production procurement infrastructure until authenticated persistence, supplier token security, email delivery and ERP adapters are implemented.
