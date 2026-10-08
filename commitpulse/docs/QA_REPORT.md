# QA Report — CommitPulse v1.1

## Release
- Product: CommitPulse
- Release: v1.1 top workflow release
- Stage: working MVP / pre-launch / pre-revenue

## Known v1.0 bugs fixed
- Supplier View previously rendered a single PO even when the workflow grouped multiple POs. v1.1 renders all POs in a request and submits them together.
- Supplier request links previously resolved only to a generic supplier screen. v1.1 uses persistent request IDs with `?view=supplier&request=RQ-XXXX`.
- Export visible previously could produce an empty export when nothing was selected. v1.1 exports the filtered visible rows.
- Reload persistence did not include the request layer. v1.1 persists requests and migrates legacy workspace state.
- Request creation now avoids duplicating orders already attached to an active request.
- The demo request dataset contains a real multi-PO request for supplier-side testing.

## Validation
- Embedded application JavaScript passes syntax validation.
- GitHub Actions browser smoke **passed** on run **37772354541** (run number 10).
- Successful browser coverage includes:
  1. overview metrics
  2. near-term attention queue
  3. Open POs table and select-all
  4. grouped supplier request creation
  5. existing multi-PO request opening
  6. two-row supplier confirmation
  7. request persistence in localStorage before and after reload
  8. CSV import with column mapping
  9. CSV export download
  10. no page/browser errors during the run

## Deployment
- Production deployment: `dpl_Ger43w6ZBifSumWH9fpeu45zpUSg`
- Production alias: `https://commitpulse-demo.vercel.app`
- Deployment state: READY

## Honest limitations
The demo is still browser-local. It does not send real email, use signed production supplier tokens, provide multi-user cloud persistence, or write back to an ERP.
