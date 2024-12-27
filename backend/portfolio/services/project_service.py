from portfolio.main.models.project import Project

def create_project(title, description, **extra_fields):
    """
    Service to create a new project.
    """
    project = Project.objects.create(title=title, description=description, **extra_fields)
    return project

def update_project(project_id, **extra_fields):
    """
    Service to update an existing project.
    """
    project = Project.objects.get(id=project_id)
    for key, value in extra_fields.items():
        setattr(project, key, value)
    project.save()
    return project

def delete_project(project_id):
    """
    Service to delete an existing project.
    """
    project = Project.objects.get(id=project_id)
    project.delete()
    return project
