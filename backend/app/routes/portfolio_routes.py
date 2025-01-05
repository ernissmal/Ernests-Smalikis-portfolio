from fastapi import APIRouter
from app.models import PortfolioItem

router = APIRouter(prefix="/portfolio")

@router.get("/")
async def get_items():
    # Replace with DB fetch logic
    return [{"title": "Project 1", "description": "Demo project", "link": "https://example.com"}]
