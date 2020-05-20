from django.db import models
# from phone_field import PhoneField
from buzz.models import Category
from django.utils import timezone
from django.contrib.auth.models import User
from users.models import Student
import uuid
from profanity.validators import validate_is_profane
# Create your models here


class Hostel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # Details
    name = models.CharField(max_length=1)
    about = models.TextField(max_length=2000, null=True)
    discussion = models.OneToOneField(
        Category, on_delete=models.SET_NULL, null=True, blank=True)
    warden_name = models.CharField(max_length=100)
    caretaker_name = models.CharField(max_length=100)
    caretaker_contact = models.CharField(max_length=10,
                                         help_text='Contact phone number')
    capacity = models.PositiveIntegerField(blank=True, null=True,)
    slug = models.SlugField(max_length=250, null=True, blank=True)
    image = models.ImageField(upload_to='hostel_images', null=True)
    user = models.ForeignKey(User, related_name='hostel',
                             related_query_name='hostel', on_delete=models.CASCADE, null=True)

    # Mess

    b_start = models.TimeField(null=True)  # Breakast Start
    b_end = models.TimeField(null=True)  # Breakfast End

    l_start = models.TimeField(null=True)  # Lunch Start
    l_end = models.TimeField(null=True)  # Lunch end

    d_start = models.TimeField(null=True)  # Dinner Start
    d_end = models.TimeField(null=True)  # Dinner End

    class Meta:
        verbose_name_plural = "Hostels"

    def __str__(self):
        return f'{self.name} {self.warden_name}'


class ComplaintTypes(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=40)


class ComplaintStatus(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=40)


class Complaint(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    types = models.ForeignKey(ComplaintTypes, related_name='Complaint',
                              related_query_name='Complaint', on_delete=models.CASCADE)
    status = models.ForeignKey(ComplaintStatus, related_name='Complaint',
                               related_query_name='Complaint', on_delete=models.CASCADE)
    subject = models.CharField(max_length=200, validators=[validate_is_profane])
    description = models.TextField(max_length=1000, validators=[validate_is_profane])
    image = models.ImageField(
        upload_to='hostel_complaint', null=True, blank=True)
    avail_start = models.TimeField()
    avail_end = models.TimeField()
    date_posted = models.DateTimeField(default=timezone.now)
    comments = models.TextField(max_length=300, validators=[validate_is_profane])
    user = models.ForeignKey(User, related_name='complaint', related_query_name='complaint',
                             on_delete=models.SET_NULL, null=True, blank=True)
    slug = models.SlugField(max_length=100, null=True, blank=True)

    class Meta:
        ordering = ['-date_posted']

    def __str__(self):
        return f'{self.subject} {self.user.username}'


class MessUnit(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    DAYS = [
        ('MON', 'Monday'),
        ('TUE', 'Tuseday'),
        ('WED', 'Wednesday'),
        ('THR', 'Thursday'),
        ('FRI', 'Friday'),
        ('SAT', 'Saturday'),
        ('SUN', 'Sunday')
    ]

    TYPE = [
        ('Breakfast', 'Breakfast'), ('Lunch', 'Lunch'), ('Dinner', 'Dinner')
    ]

    mess = models.ForeignKey(Hostel, related_name='MessUnit',
                             related_query_name='MessUnit', on_delete=models.CASCADE)
    day = models.CharField(max_length=3, choices=DAYS)
    type = models.CharField(max_length=20, choices=TYPE)
    # Where The Information about today's Food is stored.
    food = models.TextField(max_length=200)
    image = models.ImageField(upload_to="messunit", blank=True, null=True)
    slug = models.SlugField(max_length=100, null=True, blank=True)

    def __str__(self):
        return f'{self.food}'


class MessUnitComment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    messunit = models.ForeignKey(MessUnit, related_name='MessUnit',
                                 related_query_name='MessUnit', on_delete=models.SET_NULL, null=True, blank=True)
    stars = models.PositiveIntegerField()
    comment = models.CharField(max_length=200, blank=True, null=True, validators=[validate_is_profane])
    date_posted = models.DateTimeField(default=timezone.now, editable=False)
    user = models.ForeignKey(User, related_name='MessUnitComment',
                             related_query_name='MessUnitComment', on_delete=models.CASCADE)

    class Meta:
        ordering = ['-date_posted']

    def __str__(self):
        return f'{self.stars} {self.user.username}'


class Room(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    hostel = models.ForeignKey(Hostel, on_delete=models.CASCADE)
    wing = models.CharField(max_length=3, editable=False)
    num = models.PositiveIntegerField(editable=False)

    def __str__(self):
        return f'{self.hostel.name} : {self.wing}-{self.num}'

