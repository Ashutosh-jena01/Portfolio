# Architecture

## Current structure

```text
D:\Portfolio
├── frontend/                 React + TypeScript + Vite + Tailwind CSS v4
│   └── src/
│       ├── App.tsx           Connectivity screen
│       ├── services/api.ts   Typed health API client
│       └── main.tsx          React entry point
└── backend/                  FastAPI + SQLAlchemy + Psycopg 3
    ├── app/
    │   ├── main.py           Application and health routes
    │   ├── core/config.py    Pydantic settings and database URL
    │   └── database/         Engine, session factory and metadata base
    └── alembic/              Migration environment and revisions
```

## Request flow

The browser calls `/api/v1/health` and `/api/v1/health/database` through the centralized frontend API service. Vite proxies `/api` to the local FastAPI server. The database health route opens a SQLAlchemy connection and executes `SELECT 1` against PostgreSQL.

## Configuration and migrations

Backend settings are loaded from `backend/.env` with Pydantic Settings. SQLAlchemy builds a `postgresql+psycopg` URL without storing it in source. Alembic reads the same settings and uses `Base.metadata` for schema comparison. The current migration head is `abedb8e2c2d2` and contains an empty baseline revision.

