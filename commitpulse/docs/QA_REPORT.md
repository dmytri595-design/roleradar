# QA Report — CommitPulse v1.1

## Known v1.0 bugs fixed
- Supplier View previously rendered a single PO even when the buyer workflow grouped multiple POs. v1.1 renders all POs in the request and submits them together.
- Supplier request URLs previously exposed only a generic supplier view. v1.1 persists a request ID and resolves `?view=supplier&request=RQ-XXXX`.
- Export Visible previously exported an empty file when no rows were selected. v1.1 exports the filtered visible rows.
- Reload persistence did not include a request layer. v1.1 persists requests and migrates legacy workspace state.
- The request preview now groups exactly one request per supplier.

## Validation
- HTML document extracted and generated successfully.
- Embedded JavaScript passes `node --check`.
- Local headless Chromium is installed in the environment but the browser process hangs in this container, so no local browser run is claimed.
- GitHub Actions browser smoke test is configured to start a clean static server and exercise the v1.1 workflow in Chromium.

## Acceptance scenarios
1. Load dashboard and metrics.
2. Filter Open POs.
3. Select all and create grouped supplier requests.
4. Open request center.
5. Open supplier request.
6. Confirm multiple POs.
7. Reload and verify persistence.
8. Import CSV.
9. Export visible rows.

## Release policy
Keep production integration claims disabled until authentication, server persistence, communications delivery and ERP adapters exist.
