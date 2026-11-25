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

