from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
import uuid
from profanity.validators import validate_is_profane
length = 100
# Implementation Guidance From https://acrobat.uservoice.com/forums/590923-acrobat-for-windows-and-mac/filters/new


class FeaturenBugCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=length, blank=True, null=True)

    class Meta:
        verbose_name = "Category of Bugs/Features"

    def __str__(self):
        return f'{self.name}'


class FeaturenBugStatus(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=length, blank=True, null=True)

    class Meta:
        verbose_name = "Status of Bugs/Features"

    def __str__(self):
        return f'{self.name}'


class FeaturenBug(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    TYPES = (("Feature", "Feature Request"), ("Bug", "Bug Report"))

    type = models.CharField(choices=TYPES, max_length=7)
    category = models.ForeignKey(FeaturenBugCategory, on_delete=models.PROTECT)
    status = models.ForeignKey(FeaturenBugStatus, on_delete=models.PROTECT)
    title = models.CharField(max_length=length*3, validators=[validate_is_profane])
    text = models.TextField(max_length=length*20, validators=[validate_is_profane])
    user = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to="featurenbug_images",
                              help_text="Photos of Bug Or Feature you Request! In case of please provide and Image")
    date_posted = models.DateTimeField(default=timezone.now, editable=False)
    # vote = models.ManyToManyField(User)
    slug = models.SlugField(max_length=150, null=True)

    class Meta:
        get_latest_by = "-date_posted"
        verbose_name = "Feature Requests and Bug Reports"

    def __str__(self):
        return f'{self.type} : {self.title}'
