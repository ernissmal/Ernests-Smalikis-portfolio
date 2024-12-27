from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from portfolio.main.models.user import User

def login_user(email, password):
    """
    Service to authenticate a user and return a JWT token.
    """
    user = authenticate(email=email, password=password)
    if user is not None:
        refresh = RefreshToken.for_user(user)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
    else:
        return None

def register_user(email, password, **extra_fields):
    """
    Service to register a new user and return a JWT token.
    """
    user = User.objects.create_user(email=email, password=password, **extra_fields)
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }
