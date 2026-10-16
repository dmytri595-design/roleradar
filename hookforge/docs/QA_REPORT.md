# QA Report — HookForge v1.1

## Release scope
- Reliability matrix across selected failure patterns and retry policies
- Custom required-path payload contract validator
- Educational provider-style signature presets
- Scenario pack import/export
- Self-contained HTML report export
- Existing JSON/CSV report export and full workspace backup

## Validation status
The v1.1 feature code is committed. Browser-based acceptance tests have not yet passed in CI; do not represent this release as fully browser-verified until the smoke workflow is green.

## Manual acceptance checklist
1. Open overview and confirm metrics render.
2. Open Test Matrix and run default 6 × 3 matrix (18 cases).
3. Verify the matrix table and CSV export.
4. Validate the default payload contract.
5. Switch signature preset and load it into Signature Lab.
6. Generate and verify HMAC-SHA256.
7. Export a scenario pack and import it back.
8. Run a drill and export a self-contained HTML report.
9. Export and restore the full workspace.
10. Reload the page and confirm local reports/scenarios persist.

## Important limitation
All delivery results are simulated locally. Do not represent this report as proof of real endpoint delivery or provider certification.
