# Asset Licenses

This register must be updated whenever an external visual, font, icon, model, texture, sound or dataset is added.

| Asset | Source | License | Attribution required | Local path | Notes |
|---|---|---|---|---|---|
| Current starter assets | Vite/React starter files | Verify before production use | To be confirmed | `frontend/src/assets`, `frontend/public` | Existing Phase 1 assets; do not assume production licensing. |
| Satoshi variable WOFF2 | Fontshare official download/API | ITF Free Font License 2.0 | Optional credit; preserve license notice | Local-only `frontend/src/assets/fonts/Satoshi-Variable.woff2` | Intentionally ignored by the public repository. Obtain directly from Fontshare for each fresh clone; license retained in `SATOSHI-FFL.txt`. Self-hosting on the owner's own website is permitted; public repository redistribution is not. |
| Space Grotesk variable WOFF2 | Official Florian Karsten repository | SIL Open Font License 1.1 | Preserve OFL notice | `frontend/src/assets/fonts/SpaceGrotesk-Variable.woff2` | License retained in `SPACE-GROTESK-OFL.txt`. |
| JetBrains Mono variable WOFF2 | Official JetBrains repository | SIL Open Font License 1.1 | Preserve OFL notice | `frontend/src/assets/fonts/JetBrainsMono-Variable.woff2` | License retained in `JETBRAINS-MONO-OFL.txt`. |

## Rules

- Record source URL, creator, license and download date before adding an asset.
- Keep license text or attribution requirements when required by the license.
- Do not use copyrighted space imagery, fonts or 3D assets without documented permission.
- Prefer assets with clear commercial-use terms compatible with the project.
- Font files must not be added until their official source and license are verified.
- Satoshi must remain local-only and must not be committed to or redistributed through this public repository.

