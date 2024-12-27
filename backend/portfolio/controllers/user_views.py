from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View
from portfolio.main.models.user import User
from portfolio.serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

@permission_classes([IsAuthenticated])
class UserView(View):
    model = User
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        """
        Handle GET request to retrieve a list of users or a single user.
        """
        if 'id' in kwargs:
            user = get_object_or_404(self.model, id=kwargs['id'])
            serializer = self.serializer_class(user)
            return JsonResponse(serializer.data)
        else:
            users = self.model.objects.all()
            serializer = self.serializer_class(users, many=True)
            return JsonResponse(serializer.data, safe=False)

    def post(self, request, *args, **kwargs):
        """
        Handle POST request to create a new user.
        """
        serializer = self.serializer_class(data=request.POST)
        if serializer.is_valid():
            user = serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    def put(self, request, *args, **kwargs):
        """
        Handle PUT request to update an existing user.
        """
        user = get_object_or_404(self.model, id=kwargs['id'])
        serializer = self.serializer_class(user, data=request.POST, partial=True)
        if serializer.is_valid():
            user = serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    def delete(self, request, *args, **kwargs):
        """
        Handle DELETE request to delete an existing user.
        """
        user = get_object_or_404(self.model, id=kwargs['id'])
        user.delete()
        return JsonResponse({'message': 'User deleted'}, status=204)
