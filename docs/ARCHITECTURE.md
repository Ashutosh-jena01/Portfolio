# Architecture

## Current structure

```text
D:\Portfolio
├── frontend/                 React + TypeScript + Vite + Tailwind CSS v4
│   └── src/
│       ├── App.tsx           Development preview switch and shell entry
│       ├── components/
│       │   ├── DesignSystemPreview.tsx
│       │   ├── ui/             Buttons, links, cards, labels, icons and status
│       │   ├── layout/        AppShell, Container and Section
│       │   ├── navigation/    Responsive floating Navbar
│       │   ├── pages/         PortfolioPage composition
│       │   ├── space/         Background layers and lazy procedural planet scene
│       │   └── sections/      Hero and structural portfolio sections
│       ├── config/site.ts     Central site identity and section configuration
│       ├── hooks/useActiveSection.ts
│       ├── hooks/useReducedMotion.ts
│       ├── services/api.ts    Typed health API client
│       └── main.tsx           React entry point
└── backend/                  FastAPI + SQLAlchemy + Psycopg 3
    ├── app/
    │   ├── main.py           Application and health routes
    │   ├── core/config.py    Pydantic settings and database URL
    │   └── database/         Engine, session factory and metadata base
    └── alembic/              Migration environment and revisions
```

## Request flow

The browser calls `/api/v1/health` and `/api/v1/health/database` through the centralized frontend API service. Vite proxies `/api` to the local FastAPI server. The database health route opens a SQLAlchemy connection and executes `SELECT 1` against PostgreSQL.

## Application shell and page composition

`AppShell` provides the main landmark and accessible skip link. `Container` centralizes responsive content width, while `Section` provides reusable vertical rhythm and supports either contained or full-width future environments. `PortfolioPage` composes the active order `home`, `about`, `skills`, `education`, `certifications`, `projects`, `experience`, `contact`. Education and certifications remain visible during local development even when their data lists are empty; their reusable data models keep unverified records unpublished.

The development-only design preview is selected with `/?preview=design-system` when `import.meta.env.DEV` is true. The default route always renders the portfolio page, and the API service remains unchanged.

## Navigation

`Navbar` is mounted by `AppShell` and reads labels and IDs from `config/site.ts`. Desktop links use native anchors; `useActiveSection` observes the six stable sections and marks the most relevant section, including the final section at the page bottom. At mobile widths, links become a non-modal disclosure menu with keyboard Escape, outside-pointer and breakpoint close behavior, touch-sized targets and focus restoration.

## UI component system

`components/ui` contains small typed primitives with native HTML attributes: `Button` (`primary`, `secondary`, `ghost`; `sm`, `md`, `lg`; loading and icons), `TextLink`, `IconButton`, `SectionHeading`, `Card` (`default`, `bordered`, `elevated`), `Tag`, `Eyebrow`, `Divider`, `StatusIndicator` and the typed inline-SVG `Icon` set. Components share existing Tailwind tokens and provide visible keyboard focus without introducing a UI framework or icon dependency.

## Responsive and motion foundations

The layout uses mobile-first fluid widths, `clamp()` spacing, `100svh` fallback-friendly viewport sizing, safe-area-aware navigation offsets and a medium breakpoint for navigation disclosure. Motion tokens and easing values live in the global CSS; `useReducedMotion` subscribes to `prefers-reduced-motion` changes. `useHeroParallax` updates decorative CSS custom properties through a short requestAnimationFrame interpolation only while the hero is visible, the tab is active, motion is allowed and a fine pointer is available. `useHeroScrollTransition` uses the same gated pattern for passive scroll updates. No React state updates occur per pointer or scroll event.

## Space environment foundation

`SpaceEnvironment` is rendered independently from hero content and composes `AtmosphericGlow`, `Starfield`, a procedural cloud texture and a horizon fade. The background uses deterministic CSS radial/linear gradients with explicit irregular star positions, existing color tokens, `pointer-events: none`, `aria-hidden` and a local stacking context. Hero-scoped parallax moves the three star layers at 2px, 5px and 9px maximum offsets, with a smaller atmospheric offset; all values return to zero on pointer exit, reduced-motion changes, hidden tabs or offscreen state. Scroll transition variables add a small upward movement and restrained opacity reduction as the hero leaves the viewport, while preserving the existing horizon fade. The Phase 3.3 `PlanetScene` implementation and assets remain preserved but are currently unmounted while the final hero visual is deferred; the active production graph contains no Three.js initialization or planet texture chunk.

`ScrollReveal` and `useScrollReveal` provide one-time IntersectionObserver reveals with tokenized opacity/translate timing, optional delay and direct-child staggering. They are applied to `AboutSection` and the existing placeholder section layout, and can be reused by future Skills, Projects, Experience and Contact content without changing section structure.

`professionalProfile.ts` contains the typed profile content model. It reuses the confirmed identity values from `siteConfig` and keeps optional portrait/résumé assets absent until approved files are available. `AboutSection` consumes this data without adding backend APIs or database dependencies. Its CSS portrait placeholder is intentionally non-photographic; the résumé control is conditionally rendered only when `resumeSrc` is populated.

`professionalHighlights.ts` contains the typed highlight-card model consumed by `ProfessionalHighlights`. Confirmed data is limited to the existing designation; the remaining categories explicitly remain pending verified source material. The highlights add no scroll listeners and reuse `ScrollReveal`.

`technicalSkills.ts` defines reusable typed `TechnicalSkill` and `TechnicalSkillCategory` records with stable IDs, display order, optional documentation/project references and category associations. `SkillsSection` now composes `SkillsConstellation`, `SkillCategoryDetails` and synchronized button cards around one selected-category state. SVG nodes are keyboard-operable; the card controls provide the accessible alternative. No orbital state, rotation or 3D interaction exists.

Phase 3.7 keeps the layout mobile-first from 320px through wide desktop widths. The floating navigation controls and links use 44px minimum touch targets, while the page shell and hero provide local clipping for intentional decorative movement rather than relying on global overflow hiding. Scroll-transition listeners are attached only while the hero intersects the viewport. Phase 4.2 removes the active-section requestAnimationFrame geometry pass; the observer now maintains section ratios and only the inexpensive top/bottom edge cases use the passive scroll listener.

Phase 3.8.2 retains the three-layer CSS starfield and adds denser deterministic gradient fields, six limited twinkle accents and a right-weighted procedural dust layer. Twinkle playback is controlled through the existing hero visibility/reduced-motion lifecycle; no new dependency, WebGL path or external runtime asset is introduced. `useActiveSection` explicitly restores the Home state at the top scroll position before evaluating intersection entries.

## Configuration and migrations

Backend settings are loaded from `backend/.env` with Pydantic Settings. SQLAlchemy builds a `postgresql+psycopg` URL without storing it in source. Alembic reads the same settings and uses `Base.metadata` for schema comparison. The current migration head is `abedb8e2c2d2` and contains an empty baseline revision.

`education.ts` defines the reusable typed `EducationEntry` model and currently exposes an empty public record list because the proposed academic qualifications have not been verified. `EducationSection` is placed between Skills and Projects, renders a semantic ordered timeline when approved entries are available, and is intentionally omitted from the navigation configuration until its content is verified.

`certifications.ts` defines the typed `Certification` model, including credential type, category, dates, optional IDs, assets and verification URLs. `CertificationsSection` follows Education and conditionally renders certificate and verification links only when approved values exist; its empty public list keeps provisional credentials unpublished.

## Phase 4.7 integration audit

Education and Certifications remain visible during local development while their data lists are empty, without adding navigation items. The active navigation continues to observe only the configured six destinations. Hero motion remains visibility-, tab- and reduced-motion-gated; no new scroll loop or layout measurement was introduced.

