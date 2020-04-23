from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse

import uuid


class Society(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    CATEGORIES = [
        ('TECH', 'Technical'),
        ('CUL', 'Cultural'),
        ('ADV', 'Adventure'),
        ('TRAV', 'Travel'),
        ('SOC', 'Social'),
        ('BUS', 'Business'),
        ('ELC', 'Elocution')
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=4, choices=CATEGORIES)
    about = models.CharField(max_length=2000)

    student_head = models.CharField(max_length=100)
    site_link = models.URLField()

    logo = models.ImageField(
        default='default_society_logo.jpg', upload_to='society_logos')
    image = models.ImageField(
        default='default_society_photo.jpg', upload_to='society_photos')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Societies"

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("post-detail", kwargs={"pk": self.pk})


class Event(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # META
    title = models.CharField(max_length=100)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now, editable=False)

    # WHEN
    start_time = models.DateTimeField(default=timezone.now)
    end_time = models.DateTimeField(default=timezone.now)

    # WHERE
    place = models.CharField(max_length=100)
    inCampus = models.BooleanField()
    #location = map_fields.AddressField(max_length=200)
    location = models.URLField(null=True)

    # Poster Image
    poster_image = models.ImageField(
        default='event_photo.jpg', upload_to='event_photos')
    external_link = models.URLField()

    # Logical Connections

    #attendee = models.ManyToManyField(User)
    society = models.ForeignKey(
        Society, related_name='Event', related_query_name='Event', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("post-detail", kwargs={"pk": self.pk})

# Class To Handle Student Membership
