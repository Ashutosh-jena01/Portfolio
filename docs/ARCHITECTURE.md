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

`AppShell` provides the main landmark and accessible skip link. `Container` centralizes responsive content width, while `Section` provides reusable vertical rhythm and supports either contained or full-width future environments. `PortfolioPage` currently composes structural sections in this order: `home`, `about`, `skills`, `projects`, `experience`, `contact`. The sections are intentionally placeholders and contain no fabricated professional claims.

The development-only design preview is selected with `/?preview=design-system` when `import.meta.env.DEV` is true. The default route always renders the portfolio page, and the API service remains unchanged.

## Navigation

`Navbar` is mounted by `AppShell` and reads labels and IDs from `config/site.ts`. Desktop links use native anchors; `useActiveSection` observes the six stable sections and marks the most relevant section, including the final section at the page bottom. At mobile widths, links become a non-modal disclosure menu with keyboard Escape, outside-pointer and breakpoint close behavior, touch-sized targets and focus restoration.

## UI component system

`components/ui` contains small typed primitives with native HTML attributes: `Button` (`primary`, `secondary`, `ghost`; `sm`, `md`, `lg`; loading and icons), `TextLink`, `IconButton`, `SectionHeading`, `Card` (`default`, `bordered`, `elevated`), `Tag`, `Eyebrow`, `Divider`, `StatusIndicator` and the typed inline-SVG `Icon` set. Components share existing Tailwind tokens and provide visible keyboard focus without introducing a UI framework or icon dependency.

## Responsive and motion foundations

The layout uses mobile-first fluid widths, `clamp()` spacing, `100svh` fallback-friendly viewport sizing, safe-area-aware navigation offsets and a medium breakpoint for navigation disclosure. Motion tokens and easing values live in the global CSS; `useReducedMotion` subscribes to `prefers-reduced-motion` changes for future interactive work. No continuous loops, global animation listeners or 3D runtime were added.

## Configuration and migrations

Backend settings are loaded from `backend/.env` with Pydantic Settings. SQLAlchemy builds a `postgresql+psycopg` URL without storing it in source. Alembic reads the same settings and uses `Base.metadata` for schema comparison. The current migration head is `abedb8e2c2d2` and contains an empty baseline revision.

