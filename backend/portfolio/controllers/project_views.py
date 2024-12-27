from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from portfolio.main.models.project import Project

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
    projects = Project.objects.all().values()
    return JsonResponse(list(projects), safe=False)

def project_detail_api(request, project_id):
    """
    API view to get details of a specific project.
    """
    project = get_object_or_404(Project, id=project_id)
    return JsonResponse({
        'title': project.title,
        'description': project.description,
        'technology_stack': project.technology_stack,
        'github_link': project.github_link,
        'live_demo_link': project.live_demo_link,
        'thumbnail': project.thumbnail.url if project.thumbnail else None,
        'created_at': project.created_at,
        'updated_at': project.updated_at,
        'is_featured': project.is_featured,
        'completion_date': project.completion_date,
        'type': project.type,
    })
