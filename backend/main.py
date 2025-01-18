from fastapi import FastAPI
from app.routes import portfolio_routes

app = FastAPI()

# Register routes
app.include_router(portfolio_routes.router)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}
