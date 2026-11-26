# Design System

## Identity

Beyond the Cloud is a premium, professional, cinematic space-exploration portfolio. The balance is approximately 90% professional and 10% futuristic.

Use premium editorial typography, realistic space visuals, minimal navigation, generous whitespace and restrained purposeful animation. Avoid excessive neon, gaming-style interfaces and unnecessary visual clutter.

## Typography

- Primary: Satoshi
- Secondary: Space Grotesk
- Technical: JetBrains Mono

The global CSS loads official local variable WOFF2 assets with `font-display: swap`, then falls back to local system families. `font-display`, `font-body` and `font-mono` tokens preserve the existing hierarchy. Responsive display and lead typography uses `clamp()`. No external runtime font request is used.

## Semantic tokens

The dark default theme maps Obsidian to the page background, Graphite to surfaces, a darker elevated surface to raised panels, Lunar White to primary text, Titanium to secondary text, and Cosmic Blue to accents. Additional semantic tokens cover muted text, borders, focus, selection, success, warning and error states. Radius and shadow tokens are also defined through Tailwind CSS v4's CSS-first `@theme` configuration.

The temporary preview demonstrates typography, palette, spacing, borders, responsive behavior and existing service health indicators. It is not the final portfolio homepage.

## Application layout

The global shell uses a semantic main landmark, skip-to-content link, responsive `design-container`, reusable section spacing and stable section identifiers. The current structural order is `home`, `about`, `skills`, `projects`, `experience`, `contact`. The active application includes the floating responsive navigation, CSS cinematic space environment, hero composition and structural placeholder sections. The planet visual remains deferred and is not rendered.

The floating navigation uses the existing Graphite/Obsidian surfaces, subtle borders, restrained backdrop blur and Cosmic Blue for the “Let’s Talk” action. It collapses to an accessible disclosure menu at the medium breakpoint without adding glassmorphism or unrelated visual effects.

## Responsive and motion tokens

The layout is mobile-first and fluid across 320px through wide desktop widths. Content uses the existing `design-container`, responsive section spacing and safe-area-aware fixed navigation. Global motion tokens cover instant, fast (150ms), normal (200ms), navigation (300ms), reveal (600ms) and cinematic (1000ms) categories, with standard, entrance, exit and deceleration easing tokens. Placeholder portfolio sections remain static; the development preview demonstrates only the foundational transitions.

The Phase 3.1 hero background uses Obsidian as its base, irregular low-opacity Lunar White/Titanium/Cosmic Blue star layers, restrained right-weighted blue atmospheric forms and an Obsidian horizon fade. The hero/About boundary is intentionally seamless; the global section border system remains unchanged. Phase 3.2 adds a left-weighted editorial headline and CTA composition while preserving the same typography, navigation and palette.

Phase 3.3 is temporarily deferred while the final hero visual is decided. The preserved implementation includes a texture-backed Earth-inspired planet, but it is not rendered or included in the active production graph. The current hero uses the approved editorial typography and Phase 3.1 atmospheric background.

The Phase 3.2 headline uses a deliberate two-line desktop composition (`Beyond` / `the Cloud.`). The second line is kept together only at wide desktop widths; tablet and mobile layouts may wrap naturally to avoid clipping.

Phase 3.4–3.6 add coordinated CSS entrance animation, fine-pointer parallax, a restrained hero scroll transition and reusable IntersectionObserver scroll reveals. These effects use existing motion tokens, CSS opacity/transforms and reduced-motion alternatives; hero text and controls remain stationary during decorative movement. Scroll reveals support base delays and indexed sequential child staggering.

Phase 3.8.2 refines the existing space environment with denser irregular stars, restrained luminous halos, asynchronous limited twinkle and richer right-weighted Cosmic Blue atmospheric depth. Obsidian remains dominant behind the hero copy, and the approved typography, layout and palette are unchanged.

Phase 3.7 responsive auditing preserves this composition across the 320px–2560px range, keeps the hero CTA stack fluid on narrow screens, and gives floating navigation controls a minimum 44px touch target without changing their visual language.

## Reusable UI conventions

UI primitives use semantic native elements, existing typography/color tokens, modest radii and lightweight color transitions. Buttons are reserved for actions, links for navigation, cards are optional non-interactive surfaces, tags are non-interactive labels, and status indicators pair color with text. Icons are inline SVGs using `currentColor`; decorative icons are hidden from assistive technology.

## Color palette

| Token | Hex |
|---|---|
| Obsidian | `#08090B` |
| Graphite | `#14161B` |
| Lunar White | `#F5F5F5` |
| Titanium | `#969DA8` |
| Cosmic Blue | `#7695C9` |

## Planned visual language

Cinematic space hero, oversized animated professional typography, floating navigation, professional about section, interactive planetary skill visualization, mission-based project archives, constellation-inspired experience timeline, certifications, interactive lunar landscape footer, astronaut/rover/satellite/rocket interactions, rocket return-to-top interaction and NOVA AI assistant. These are future requirements and are not implemented in Phase 1.

