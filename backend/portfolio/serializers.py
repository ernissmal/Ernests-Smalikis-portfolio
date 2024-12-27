from rest_framework import serializers
from portfolio.main.models.user import User
from portfolio.main.models.project import Project

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'phone_number', 'is_active', 'is_staff', 'date_joined', 'profile_picture']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'technology_stack', 'github_link', 'live_demo_link', 'thumbnail', 'created_at', 'updated_at', 'is_featured', 'completion_date', 'type']
