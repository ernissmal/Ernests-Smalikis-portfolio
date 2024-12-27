
from django.urls import path
from .views import base

urlpatterns = [
    # ...existing url patterns...
    path('', base.index, name='index'),
    # ...existing url patterns...
]