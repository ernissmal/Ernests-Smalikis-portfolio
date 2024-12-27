from django.db import models
from django.utils.translation import gettext_lazy as _

class Project(models.Model):
    """
    Model to represent a project in the portfolio.
    """
    title = models.CharField(_("title"), max_length=200)
    description = models.TextField(_("description"), blank=True)
    technology_stack = models.JSONField(
        _("technology stack"), default=dict, blank=True,
        help_text="A JSON field to store technologies used in the project, e.g., {'frontend': 'Vue.js', 'backend': 'Django'}"
    )
    github_link = models.URLField(_("GitHub repository"), max_length=500, blank=True, null=True)
    live_demo_link = models.URLField(_("live demo link"), max_length=500, blank=True, null=True)
    thumbnail = models.ImageField(
        _("thumbnail"), upload_to="project_thumbnails/", blank=True, null=True
    )
    created_at = models.DateTimeField(_("created at"), auto_now_add=True)
    updated_at = models.DateTimeField(_("updated at"), auto_now=True)
    is_featured = models.BooleanField(
        _("featured"), default=False, 
        help_text="Indicates whether this project should be featured in the portfolio."
    )
    completion_date = models.DateField(_("completion date"), blank=True, null=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = _("project")
        verbose_name_plural = _("projects")

    def __str__(self):
        return self.title

    def is_completed(self):
        return self.completion_date is not None

class ProjectTag(models.Model):
    """
    Tags for categorizing projects.
    """
    name = models.CharField(_("name"), max_length=100, unique=True)
    projects = models.ManyToManyField(
        Project, related_name="tags", blank=True,
        help_text="Projects associated with this tag."
    )

    class Meta:
        verbose_name = _("tag")
        verbose_name_plural = _("tags")

    def __str__(self):
        return self.name
