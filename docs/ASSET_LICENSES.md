# Asset Licenses

This register must be updated whenever an external visual, font, icon, model, texture, sound or dataset is added.

## Runtime dependencies

| Dependency | Purpose | License | External runtime request |
|---|---|---|---|
| `three@0.187.0` | WebGL geometry, shader material and lighting primitives for the procedural planet | MIT | None |
| `@react-three/fiber@9.8.2` | React renderer integration for Three.js lifecycle and demand-based rendering | MIT | None |
| `@types/three@0.187.0` | TypeScript declarations for Three.js development | MIT | None |

## Planet texture

| Asset | Source | Resolution / size | License and attribution | Local path | Runtime request |
|---|---|---:|---|---|---|
| NASA Blue Marble: Next Generation January global base map | [NASA Earth Observatory / NASA Science](https://science.nasa.gov/earth/earth-observatory/blue-marble-next-generation/base-map/) — direct official asset URL: `https://assets.science.nasa.gov/content/dam/science/esd/eo/images/bmng/bmng-base/january/world.200401.3x5400x2700.jpg` | 5400×2700 JPEG / 1,884,678 bytes | NASA media guidance: NASA texture-map content is generally not subject to U.S. copyright, subject to usage guidance; acknowledge NASA Earth Observatory and the listed image contributors, and do not imply NASA endorsement. | `frontend/src/assets/planet/earth-blue-marble-january.jpg` | None |

The texture was selected as the smallest official global map suitable for a desktop spherical subject. It is not treated as automatically unrestricted: the source, contributors and NASA usage guidance are retained here for review before any public commercial deployment.

The planet texture remains preserved locally for the deferred Phase 3.3 implementation, but it is not imported by the active application while that phase is deferred.

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

