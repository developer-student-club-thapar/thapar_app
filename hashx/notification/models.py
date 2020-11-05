from django.db import models
from django.contrib.auth.models import User
import uuid
# Create your models here.


class Notifications(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=250)
    body = models.TextField()
    user = models.ManyToManyField(User)
    extra = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
