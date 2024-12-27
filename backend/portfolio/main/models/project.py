from django.db import models
from django.contrib.auth.models import User
from .base import BaseModel

class Project(BaseModel):
    title = models.CharField(max_length=255)
    description = models.TextField()
    url = models.URLField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='projects')

    def __str__(self):
        return self.title
