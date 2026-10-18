# KIT.md — Safe Application Run and Verification Kit

**Scope:** establish what the current app actually does, run it safely, and document verified behaviour. Do not infer functionality from the repository name.

## Read first
- `README.md`
- `package.json`, lockfile and scripts
- app entry points, tests and deployment configuration
- licence, data notices and environment-variable references

## Requirements pack
Before execution, write down the user task, allowed inputs, expected output, failure states, privacy boundary, any external service dependency, and the minimum pass/fail tests. Identify whether the app can work without network/API access.

## Low-cost setup
The README identifies Node.js and documents `npm install` plus `npm run dev`. Check the required runtime and lockfile first. Use a free compatible environment; do not buy hosting or API credits before confirming necessity. Keep credentials in ignored local environment files.

## Procedure
1. Inspect dependencies and scripts before running them.
2. Confirm no API key or private data is hard-coded, tracked, logged or bundled into client assets.
3. Install from the lockfile and start using the documented command.
4. Test a normal case, invalid input, empty state, and unavailable external service.
5. Check error handling and ensure no sensitive input is unnecessarily logged or transmitted.
6. Capture actual output and any warnings; do not describe intended behaviour as verified behaviour.
7. Document reset/rollback and handover steps.

## Acceptance
- [ ] Clean setup steps are reproducible.
- [ ] Inputs, outputs and limitations are described.
- [ ] Failure cases are tested or marked not run.
- [ ] External calls and data handling are disclosed.
- [ ] No secrets are exposed; any discovered real credential is rotated.
- [ ] Results and runtime versions are recorded.

Stop if the security review identifies exposed credentials or unexpected data transmission.