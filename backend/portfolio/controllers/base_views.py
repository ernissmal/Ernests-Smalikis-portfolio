from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View
from portfolio.main.models.base import BaseModel
from portfolio.serializers import BaseModelSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

@permission_classes([IsAuthenticated])
class BaseModelView(View):
    model = BaseModel
    serializer_class = BaseModelSerializer

    def get(self, request, *args, **kwargs):
        """
        Handle GET request to retrieve a list of objects or a single object.
        """
        if 'id' in kwargs:
            obj = get_object_or_404(self.model, id=kwargs['id'])
            serializer = self.serializer_class(obj)
            return JsonResponse(serializer.data)
        else:
            objects = self.model.objects.all()
            serializer = self.serializer_class(objects, many=True)
            return JsonResponse(serializer.data, safe=False)

    def post(self, request, *args, **kwargs):
        """
        Handle POST request to create a new object.
        """
        serializer = self.serializer_class(data=request.POST)
        if serializer.is_valid():
            obj = serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

    def put(self, request, *args, **kwargs):
        """
        Handle PUT request to update an existing object.
        """
        obj = get_object_or_404(self.model, id=kwargs['id'])
        serializer = self.serializer_class(obj, data=request.POST, partial=True)
        if serializer.is_valid():
            obj = serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    def delete(self, request, *args, **kwargs):
        """
        Handle DELETE request to delete an existing object.
        """
        obj = get_object_or_404(self.model, id=kwargs['id'])
        obj.delete()
        return JsonResponse({'message': 'Object deleted'}, status=204)
