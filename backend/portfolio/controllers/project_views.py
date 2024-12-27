from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from portfolio.main.models.project import Project
from portfolio.serializers import ProjectSerializer

def project_list(request):
    """
    View to list all projects.
    """
    projects = Project.objects.all()
    return render(request, 'portfolio/project_list.html', {'projects': projects})

def project_detail(request, project_id):
    """
    View to get details of a specific project.
    """
    project = get_object_or_404(Project, id=project_id)
    return render(request, 'portfolio/project_detail.html', {'project': project})

def project_list_api(request):
    """
    API view to list all projects.
    """
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return JsonResponse(serializer.data, safe=False)

def project_detail_api(request, project_id):
    """
    API view to get details of a specific project.
    """
    project = get_object_or_404(Project, id=project_id)
    serializer = ProjectSerializer(project)
    return JsonResponse(serializer.data)
