from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View
from portfolio.main.models.user import User

class UserView(View):
    model = User

    def get(self, request, *args, **kwargs):
        """
        Handle GET request to retrieve a list of users or a single user.
        """
        if 'id' in kwargs:
            user = get_object_or_404(self.model, id=kwargs['id'])
            return JsonResponse(user.to_dict())
        else:
            users = self.model.objects.all().values()
            return JsonResponse(list(users), safe=False)

    def post(self, request, *args, **kwargs):
        """
        Handle POST request to create a new user.
        """
        data = request.POST
        user = self.model.objects.create(**data)
        return JsonResponse(user.to_dict(), status=201)

    def put(self, request, *args, **kwargs):
        """
        Handle PUT request to update an existing user.
        """
        user = get_object_or_404(self.model, id=kwargs['id'])
        data = request.POST
        for key, value in data.items():
            setattr(user, key, value)
        user.save()
        return JsonResponse(user.to_dict())

    def delete(self, request, *args, **kwargs):
        """
        Handle DELETE request to delete an existing user.
        """
        user = get_object_or_404(self.model, id=kwargs['id'])
        user.delete()
        return JsonResponse({'message': 'User deleted'}, status=204)
