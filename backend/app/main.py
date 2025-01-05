from fastapi import FastAPI
from app.routes import portfolio_routes

app = FastAPI()

# Register routes
app.include_router(portfolio_routes.router)

@app.get("/")
async def root():
    return {"message": "Portfolio Backend is running"}
