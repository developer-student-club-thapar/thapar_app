from django.db import models
from django.urls import reverse
import uuid
from django.utils import timezone

# id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
from acad.models import Course, Branch, Batch, Semester
from django.contrib.auth.models import User

# Functions need to written for each of the models

DAYS = [
    ("Monday", "Monday"),
    ("Tuesday", "Tuesday"),
    ("Wednesday", "Wednesday"),
    ("Thursday", "Thursday"),
    ("Friday", "Friday"),
    ("Saturday", "Saturday"),
    ("Sunday", "Sunday"),
]


class Location(models.Model):
    """

    This Location Model is used to contain all the non resendital buildings that are in Thapar
    It Connects to both the TimeTable Locations and the Society Event Location.
    This Database needs to be populated by the members Team

    """

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
        ("COS", "COS"),  # COS ke andar vale room
        ("OAT", "OAT"),
        ("LIB", "Library"),
        ("MEC", "Mechanical Block"),
        ("AUDI", "Auditorium"),
        ("GH", "Guest House"),
        ("SP", "Sports Ground"),  # Fill Room no. with Game Names in this field
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    building = models.CharField(max_length=4, choices=BUILDING)
    room = models.CharField(max_length=10, null=True)
    floor = models.PositiveSmallIntegerField(null=True)

    published = models.BooleanField(default=True)
    # Use it as a visibilty Switch

    # Latitude and Logitude Data
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    location_url = models.URLField(null=True)  # Google Map link for location
    # Maybe connect online DWG CAD files in it one day 😂 so that it can be made as a virtual campus who knows LOLLL

    def __str__(self):
        if self.room:
            return f"{self.building} {self.room}"
        else:
            return f"{self.building}"


class Period(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    semester = models.ForeignKey(
        Semester, on_delete=models.PROTECT)
    no = models.PositiveSmallIntegerField()
    start_time = models.TimeField()
    end_time = models.TimeField()

    def __str__(self):
        return f"Per :{self.no} {self.start_time} {self.end_time}"


class Class(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    TYPE = [
        ("Lecture", "Lecture"),
        ("Practical", "Practical"),
        ("Tutorial", "Tutorial"),
    ]

    # Meta
    type = models.CharField(max_length=10, choices=TYPE)

    batch = models.ManyToManyField(Batch)

    course = models.ForeignKey(Course, on_delete=models.PROTECT)

    # WHEN
    day = models.CharField(max_length=10, choices=DAYS)
    period = models.ManyToManyField(Period)
    # Site Wide On-OFF Switch
    published = models.BooleanField(default=True)

    # Public/Private On-OFF Switch
    private = models.BooleanField(default=False)
    created_date = models.DateTimeField(default=timezone.now)
    modified_date = models.DateTimeField(default=timezone.now)

    def time(self):
        period = self.period.all()

        try:
            if period[1].start_time > period[0].start_time:
                return f'{period[0].start_time} - {period[1].end_time}'
            else:
                return f'{period[1].start_time} - {period[0].end_time}'
        except Exception:
            return f'{period[0].start_time} - { period[0].end_time}'

    class Meta:
        abstract = True
        verbose_name = "Class"
        verbose_name_plural = "Classes"


class OnlineClass(Class):
    # Link to join the meeting
    meetingURL = models.URLField(max_length=200, null=True, blank=True)

    # If the meeting is complete, URL of the recording of the URL
    isCompleted = models.BooleanField(default=False)
    recordingURL = models.URLField(max_length=200, null=True, blank=True)

    def batches(self):

        s = ''  # str(self.batch[0].branch.code)

        for bat in self.batch.all():
            s += str(bat) + ' '

        return f'{s}'

    class Meta:
        verbose_name = "OnlineClass"
        verbose_name_plural = "OnlineClasses"

    def __str__(self):
        return f"{self.course} {self.day}"


class OfflineClass(Class):
    # WHERE
    location = models.ForeignKey(Location, on_delete=models.PROTECT)

    class Meta:
        verbose_name = "OfflineClass"
        verbose_name_plural = "OfflineClasses"


class Holidays(models.Model):
    """

    Listed Holidays from Thapar Website
    refer to this doc for populating
    https://drive.google.com/file/d/1IrTFyWEsGBiRxkKnN2l4Fr9Nnp_hqJmA/view

    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.TextField()
    date = models.DateField()
