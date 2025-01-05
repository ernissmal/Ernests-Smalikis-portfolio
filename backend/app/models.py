from sqlalchemy import Column, Integer, String
from app.database import Base

class PortfolioItem(Base):
    __tablename__ = "portfolio_items"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    link = Column(String)
