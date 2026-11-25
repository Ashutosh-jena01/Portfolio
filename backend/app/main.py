from fastapi import FastAPI, HTTPException
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError

from app.core.config import settings
from app.database.session import engine


app = FastAPI(
    title=settings.APP_NAME,
    description="AI/ML Engineer Portfolio Backend",
    version="0.1.0",
)


@app.get("/")
def root():
    return {
        "application": settings.APP_NAME,
        "status": "running",
    }


@app.get("/api/v1/health")
def health_check():
    return {
        "status": "healthy",
        "service": "portfolio-backend",
    }


@app.get("/api/v1/health/database")
def database_health():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {
            "status": "healthy",
            "database": "connected",
        }

    except SQLAlchemyError:
        raise HTTPException(
            status_code=503,
            detail="Database connection failed",
        )