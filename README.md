# Beyond the Cloud

Professional, cinematic portfolio application for Ashutosh Jena, AI/ML Engineer.

The project is developed and validated locally before any future deployment decision. The current implementation is Phase 1: a React/Vite frontend, FastAPI backend, PostgreSQL connectivity, SQLAlchemy, Psycopg 3 and Alembic.

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

