from django.core.mail import send_mail
from django.conf import settings

def send_welcome_email(user_email):
    """
    Service to send a welcome email to a new user.
    """
    subject = 'Welcome to Our Platform'
    message = 'Thank you for signing up for our platform. We are excited to have you!'
    email_from = settings.DEFAULT_FROM_EMAIL
    recipient_list = [user_email]
    send_mail(subject, message, email_from, recipient_list)

def send_password_reset_email(user_email, reset_link):
    """
    Service to send a password reset email to a user.
    """
    subject = 'Password Reset Request'
    message = f'Click the link below to reset your password:\n{reset_link}'
    email_from = settings.DEFAULT_FROM_EMAIL
    recipient_list = [user_email]
    send_mail(subject, message, email_from, recipient_list)
