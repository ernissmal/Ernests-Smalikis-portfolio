from django.db import models
from .base import BaseModel

class Project(BaseModel):
    title = models.CharField(max_length=255)
    description = models.TextField()
    url = models.URLField(max_length=200)

    def __str__(self):
        return self.title
