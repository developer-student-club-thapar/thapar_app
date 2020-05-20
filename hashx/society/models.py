from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse
from timetable.models import Location
import uuid
from profanity.validators import validate_is_profane


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

    name = models.CharField(max_length=100, validators=[validate_is_profane])
    category = models.CharField(max_length=4, choices=CATEGORIES)
    about = models.CharField(max_length=2000, validators=[validate_is_profane])

    student_head = models.CharField(max_length=100, validators=[validate_is_profane])
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
    title = models.CharField(max_length=100, validators=[validate_is_profane])
    content = models.TextField(validators=[validate_is_profane])
    date_posted = models.DateTimeField(default=timezone.now, editable=False)
    date_modified = models.DateTimeField(null=True)
    # WHEN
    start_time = models.DateTimeField(default=timezone.now)
    end_time = models.DateTimeField(default=timezone.now)

    # WHERE
    place = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True)
    inCampus = models.BooleanField()

    # if Outside Campus
    location = models.CharField(max_length=200, null=True)
    location_url = models.URLField(null=True)

    # Poster Image
    poster_image = models.ImageField(
        default='event_photo.jpg', upload_to='event_photos')
    external_link = models.URLField()

    #attendee = models.ManyToManyField(User)
    society = models.ForeignKey(
        Society, related_name='Event', related_query_name='Event', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("post-detail", kwargs={"pk": self.pk})

# Class To Handle Student Membership
