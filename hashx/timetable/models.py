from django.db import models
from django.urls import reverse
import uuid
from django.utils import timezone
# id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
from acad.models import Course, Branch, Batch
from django.contrib.auth.models import User
# Functions need to written for each of the models

DAYS = [
    ("Monday", 'Monday'),
    ("Tuesday", "Tuesday"),
    ("Wednesday", "Wednesday"),
    ("Thursday", "Thursday"),
    ("Friday", "Friday"),
    ("Saturday", "Saturday"),
    ("Sunday", "Sunday")
]


class TimetableBoard(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    start_repetion = models.DateTimeField()
    end_repetition = models.DateTimeField()
    batch = models.OneToOneField(
        Batch, on_delete=models.SET_NULL, null=True, blank=True)
    admin_user = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True)
    created_date = models.DateTimeField(default=timezone.now)
    modified_date = models.DateTimeField(null=True)

    class Meta:
        verbose_name = ("Timetable")
        verbose_name_plural = ("Timetables")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Timetable_detail", kwargs={"pk": self.pk})


class Location(models.Model):
    BUILDING = [
        ("TAN", "TAN"),
        ("LP", "LP"),
        ("LT", "LT"),
        ("A", "A Block"),
        ("B", "B Block"),
        ("C", "C Block"),
        ("D", "D Block"),
        ("E", "E Block"),
        ("F", "F Block"),
        ("G", "G Block"),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    building = models.CharField(max_length=3, choices=BUILDING)
    room_no = models.CharField(max_length=4)
    floor = models.PositiveSmallIntegerField()

    # Latitude and Logitude Data
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    latitute = models.DecimalField(max_digits=9, decimal_places=6)

    # Maybe connect online DWG CAD files in it one day 😂 so that it can be made as a virtual campus who knows LOLLL

    def __str__(self):
        return f'{self.building} {self.room_no}'


class Class(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    TYPE = [
        ("Lecture", "Lecture"),
        ("Practical", "Practical"),
        ("Tutorial", "Tutorial")
    ]
    # Meta
    type = models.CharField(max_length=10, choices=TYPE)
    timetableboard = models.ForeignKey(
        TimetableBoard, on_delete=models.CASCADE)
    created_date = models.DateTimeField(default=timezone.now)
    modified_date = models.DateTimeField(null=True)
    course = models.ForeignKey(Course, on_delete=models.PROTECT)
    timetableboard = models.ForeignKey(
        TimetableBoard, on_delete=models.CASCADE)

    # WHEN
    day = models.DateTimeField(max_length=10, choices=DAYS)
    start_time = models.TimeField()
    end_time = models.TimeField()

    # WHERE
    location = models.ForeignKey(Location, on_delete=models.PROTECT)

    published = models.BooleanField(default=True)  # Site Wide On-OFF Switch
    # Public/Private On-OFF Switch
    private = models.BooleanField(default=False)
