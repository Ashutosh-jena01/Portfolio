# Animation Guidelines

- Animation should communicate hierarchy, orientation or feedback.
- Keep motion restrained and cinematic; do not turn the interface into a game HUD.
- Honor `prefers-reduced-motion` by removing or simplifying nonessential movement.
- Keep interactions keyboard and screen-reader usable independent of animation.
- Avoid layout-shifting animations and respect performance budgets on lower-capability devices.
- Any future 3D scene must adapt quality, particle count and frame work to device capability.
- Review animation timing, focus behavior and reduced-motion behavior as part of Phase 9.
- Navigation transitions are limited to hover, active-link, menu disclosure and icon-state changes; `prefers-reduced-motion` removes unnecessary movement.
- UI component transitions are limited to color, opacity and disclosure state changes; loading indicators are the only continuous motion and are disabled by the global reduced-motion rule.
- Motion tokens: instant `0ms`, fast `150ms`, normal `200ms`, navigation `300ms`, reveal `600ms`, cinematic `1000ms`.
- Easing tokens: standard `cubic-bezier(0.2, 0, 0, 1)`, entrance `cubic-bezier(0.16, 1, 0.3, 1)`, exit `cubic-bezier(0.7, 0, 0.84, 0)`, deceleration `cubic-bezier(0, 0, 0.2, 1)`.
- `useReducedMotion` listens for live preference changes; CSS also disables smooth scrolling and nonessential transitions/animations.

## Future performance requirements

- Lazy-load 3D environments and suspend offscreen animation.
- Adapt rendering quality and provide a mobile fallback when WebGL capability is limited.
- Provide reduced-motion alternatives for cinematic effects.
- Avoid layout shifts, continuous background processing and unnecessary `will-change` usage.

## Phase 3.1 environment

The space environment uses deterministic CSS star placement across distant, mid and foreground layers. Phase 3.5 adds restrained pointer parallax through CSS custom properties and a requestAnimationFrame interpolation: distant, mid and foreground layers use progressively stronger 2px, 5px and 9px maximum offsets, while the atmospheric glow uses a smaller offset. The controller has no React state updates per pointer event, suspends offscreen and hidden-tab processing, cleans up listeners/frames, disables itself on touch-only pointers and resets for reduced motion.

Phase 3.3 planet rendering is currently deferred and unmounted. The preserved implementation remains available for later approval, including demand rendering, capped pixel ratio and a static fallback. Phase 3.4 uses only lightweight CSS entrance animation; no Three.js or WebGL work runs in the active app.

## Phase 3.4 entrance sequence

The active entrance sequence uses coordinated CSS opacity and small translate transitions for the floating navigation, identity/designation, headline, tagline, CTA row and atmospheric background. Delays are staggered to establish hierarchy without layout shifts. `prefers-reduced-motion` makes all entrance content immediately visible and disables the animations.

## Phase 3.5 pointer interaction

Parallax is applied only to decorative background layers, so hero text, navigation and CTAs remain stationary and readable. The existing entrance animation remains on its own elements and does not share transforms with the parallax layers. Browser visual verification remains required where browser tooling is unavailable.

## Phase 3.6 scroll transitions and reveals

The hero background receives a restrained scroll-out treatment through CSS custom properties: decorative layers move upward by at most 16px and fade by less than half before the About section, while the existing horizon fade remains intact. `useHeroScrollTransition` schedules passive-scroll work only while the hero is intersecting and the document is visible; it has no continuous loop and leaves hero content stationary.

`ScrollReveal` uses `IntersectionObserver` with one-time reveal behavior by default. It supports token-based delay and direct-child staggering, and applies only opacity and small upward transforms. Content remains visible if the observer is unavailable or reduced motion is enabled; runtime reduced-motion changes reveal any pending content immediately.

## Phase 3.7 responsive and performance audit

The audit confirmed no new animation loop, dependency, runtime asset request or layout-shifting reveal was required. Hero parallax and scroll transition work are both observer-gated; scroll listeners are now attached only while the hero is intersecting. Navigation and active-section observers retain cleanup, and the existing entrance/parallax/scroll effects remain on separate decorative or content layers.

## Phase 3.8.2 space environment refinement

The existing three CSS star layers now use denser, irregular gradient fields with varied subpixel-to-3px star sizes and brightness. A small set of foreground accents twinkles asynchronously with CSS-only animations; the hero scroll-transition observer controls their play state, and reduced motion disables them. Additional right-weighted Cosmic Blue dust and nebula layers deepen the atmosphere without introducing external assets, neon colors or a continuous JavaScript loop.

## Phase 4.2 profile highlights and scroll performance

The active-section hook now uses IntersectionObserver-maintained ratios for normal navigation updates, retaining only passive top-of-document and bottom-of-document checks. Professional highlight cards reuse `ScrollReveal` with sequential delays and restrained hover transitions; they add no scroll listeners or continuous animation.

## Phase 4.3 technical skills

`SkillsSection` uses the existing `ScrollReveal` observer for the constellation and synchronized category controls with sequential delays. Node, connection, card and detail-panel transitions use short opacity/color/border changes only. There are no skill-level scroll listeners, parallax effects, percentage animations, orbital rotation or continuous loops.

## Phase 4.5 academic journey

`EducationSection` reuses `ScrollReveal` for one-time sequential timeline-entry reveals. Timeline geometry is reserved by normal document flow; no scroll listener, requestAnimationFrame loop or continuous effect is introduced. Reduced motion continues to make all content immediately visible through the shared reveal utility.

`CertificationsSection` reuses the same one-time `ScrollReveal` pattern for credential cards. Card hover and focus changes use restrained border, background and color transitions only; no scroll listeners, loops or expensive visual effects are added.

## Phase 4.7 integration audit

Source-level review found the existing hero parallax, hero scroll transition, active-section observer and scroll reveals use cleanup and gating appropriate to their scopes. Approved atmospheric blur and navigation backdrop effects remain unchanged; no browser profiling measurements are available in this environment.

