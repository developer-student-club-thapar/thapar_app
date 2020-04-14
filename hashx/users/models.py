from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid
# Create your models here.


class Student(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    # Security
    is_verified = models.BooleanField(default=False)
    # for Email Verification purposes .
    token = models.UUIDField(default=uuid.uuid4, editable=False)

    # Updating the Profile
    last_modifed = models.DateTimeField()

    class Meta:
        verbose_name = "Student"
        verbose_name_plural = "Students"

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Student_detail", kwargs={"pk": self.pk})
