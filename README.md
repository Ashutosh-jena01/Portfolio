# Beyond the Cloud

Professional, cinematic portfolio application for Ashutosh Jena, AI/ML Engineer.

The project is developed and validated locally before any future deployment decision. Phase 1 foundation work and Phase 2 design-system/application-shell work are complete. Phase 3 currently includes the cinematic hero, CSS space environment, entrance animation, pointer parallax, scroll transitions and reusable scroll reveals. The Phase 3.3 planet visual remains explicitly deferred while the final hero visual is decided; browser acceptance testing is still outstanding.

## Current architecture

- `frontend/`: React 19, TypeScript, Vite and Tailwind CSS v4. The active portfolio renders the floating navigation, responsive hero, deterministic CSS space environment, local fonts and structural placeholder sections.
- `backend/`: FastAPI, SQLAlchemy, Psycopg 3 and Alembic, with local PostgreSQL health checks proxied through Vite.
- `frontend/src/components/space/PlanetScene.tsx` and related planet assets are preserved for a future approved phase but are not imported or mounted by the active application. Three.js dependencies remain installed but are absent from the active production bundle.
- Automated lint/build validation has passed through Phase 3.8.1 remediation. Browser rendering, responsive behavior, accessibility interaction, network requests and Lighthouse measurements require manual verification.

## Requirements

- Windows PowerShell
- Node.js and npm
- Python 3.11+
- PostgreSQL running locally

## PostgreSQL setup

Create a local database and dedicated user using values appropriate for your machine. Do not commit the password or any `.env` file.

```sql
CREATE USER portfolio_user WITH PASSWORD '<local-password>';
CREATE DATABASE portfolio_db OWNER portfolio_user;
```

## Backend configuration

```powershell
cd D:\Portfolio\backend
Copy-Item .env.example .env
notepad .env
```

Set the placeholder values in `.env` for the local PostgreSQL instance. Keep `.env` private.

## Satoshi font setup

Satoshi is excluded from this public repository because its ITF Free Font License permits self-hosting on the owner’s website but restricts redistribution through public repositories. Fresh clones must obtain the official Satoshi package directly from [Fontshare](https://www.fontshare.com/fonts/satoshi), then place the official variable WOFF2 file at:

```text
D:\Portfolio\frontend\src\assets\fonts\Satoshi-Variable.woff2
```

Keep `frontend/src/assets/fonts/SATOSHI-FFL.txt` with the local file. Do not use an external runtime font request. The frontend build expects this local file to be present.

## Start the backend

```powershell
cd D:\Portfolio\backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
alembic upgrade head
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

If PowerShell execution policy prevents activation, run the venv interpreter directly: `\.venv\Scripts\python.exe -m pip install -r requirements.txt` and `\.venv\Scripts\python.exe -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000`.

## Start the frontend

```powershell
cd D:\Portfolio\frontend
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:5173`. The Vite proxy forwards `/api` requests to `http://127.0.0.1:8000`.

## Connectivity checks

```powershell
Invoke-RestMethod http://127.0.0.1:8000/api/v1/health
Invoke-RestMethod http://127.0.0.1:8000/api/v1/health/database
```

Run migrations only after reviewing them:

```powershell
cd D:\Portfolio\backend
alembic current
alembic heads
alembic check
```

## Roadmap

See [docs/PROJECT_PLAN.md](docs/PROJECT_PLAN.md). Deployment is intentionally outside the approved roadmap.

