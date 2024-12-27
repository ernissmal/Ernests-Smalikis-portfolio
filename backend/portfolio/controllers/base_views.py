from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View
from portfolio.main.models.base import BaseModel

class BaseModelView(View):
    model = BaseModel

    def get(self, request, *args, **kwargs):
        """
        Handle GET request to retrieve a list of objects or a single object.
        """
        if 'id' in kwargs:
            obj = get_object_or_404(self.model, id=kwargs['id'])
            return JsonResponse(obj.to_dict())
        else:
            objects = self.model.objects.all().values()
            return JsonResponse(list(objects), safe=False)

    def post(self, request, *args, **kwargs):
        """
        Handle POST request to create a new object.
        """
        data = request.POST
        obj = self.model.objects.create(**data)
        return JsonResponse(obj.to_dict(), status=201)

    def put(self, request, *args, **kwargs):
        """
        Handle PUT request to update an existing object.
        """
        obj = get_object_or_404(self.model, id=kwargs['id'])
        data = request.POST
        for key, value in data.items():
            setattr(obj, key, value)
        obj.save()
        return JsonResponse(obj.to_dict())

    def delete(self, request, *args, **kwargs):
        """
        Handle DELETE request to delete an existing object.
        """
        obj = get_object_or_404(self.model, id=kwargs['id'])
        obj.delete()
        return JsonResponse({'message': 'Object deleted'}, status=204)
