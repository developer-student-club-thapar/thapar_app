from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse
import uuid
from profanity.validators import validate_is_profane
length = 100
# Create your models here.


class ItemCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=length)

    class Meta:
        verbose_name = "Categories"

    def __str__(self):
        return f'{self.name}'


class ItemStatus(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=length)

    class Meta:
        verbose_name = "Status"

    def __str__(self):
        return f'{self.name}'


class Item(models.Model):
    TYPE = (
        ("Lost", "Lost"),
        ("Found", "Found")
    )

    name = models.CharField(max_length=150, validators=[validate_is_profane])
    type = models.CharField(max_length=5, choices=TYPE)
    details = models.TextField(
        max_length=1000, validators=[validate_is_profane])
    image = models.ImageField(
        upload_to="lostandfound_photos", blank=True, null=True)

    # Connection to Categories and status

    category = models.ForeignKey(ItemCategory, on_delete=models.PROTECT)
    status = models.ForeignKey(ItemStatus, on_delete=models.PROTECT)

    # ADD Conection to user model who posted Lost and Found Stuff be student or User
    user = models.ForeignKey(User, related_name="Item",
                             related_query_name="Item", on_delete=models.CASCADE)
    contact_details = models.CharField(
        max_length=200, validators=[validate_is_profane])
    date_posted = models.DateTimeField(default=timezone.now)
    is_reviewed = models.BooleanField(default=False)
    published = models.BooleanField(default=True)

    class Meta:
        ordering: ['-date_posted']
        verbose_name_plural = "Lost and Found Items"

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("lostandfound-item-detail", kwargs={"pk": self.pk})
