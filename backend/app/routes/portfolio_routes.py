from fastapi import APIRouter
from app.models import PortfolioItem

router = APIRouter(prefix="/portfolio")

@router.get("/")
async def get_items():
    # Replace with DB fetch logic
    return [{"title": "Project 1", "description": "Demo project", "link": "https://example.com"}]

@router.get("/about")
async def get_about():
    return {
        "biographyTitle": "Biography",
        "biographyContent": "This is a brief biography about the individual.",
        "skillsTitle": "Skills List",
        "skillCategories": {
            "Frontend": ["HTML", "CSS", "JavaScript", "Vue.js", "React"],
            "Backend": ["Node.js", "Express", "Django", "Flask"],
            "Software": ["Design Patterns", "OOP", "Agile"],
            "AI": ["Machine Learning", "Deep Learning", "NLP"],
            "Scripting": ["Python", "Bash", "Perl"],
            "Hardware": ["Arduino", "Raspberry Pi"],
            "VersionControl": ["Git", "SVN"]
        }
    }

@router.get("/contacts")
async def get_contacts():
    return {
        "address": {
            "name": "Ernests Smalikis",
            "street": "123 Main St",
            "city": "Anytown",
            "state": "CA",
            "zip": "12345"
        },
        "socialLinks": [
            {"platform": "LinkedIn", "url": "https://www.linkedin.com/in/ernestssmalikis"},
            {"platform": "GitHub", "url": "https://github.com/ernestssmalikis"},
            {"platform": "Twitter", "url": "https://twitter.com/ernestssmalikis"}
        ]
    }
