from django.db import models
from hostel.models import Room
from django.contrib.auth.models import User
from users.models import Student
from society.models import Society
from timetable.models import Location
from django.utils import timezone
import uuid
# Create your models here.


class PermiCategory(models.Model):
    '''
    Catetgory of Permissions ex. LateEntry Permi, EarlyLeavePermi, Library Permi
    This Model is Only To handle types of Permi For Girls
    Didn't feel like Hard Coding All Permi's Types
    '''
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = name = models.CharField(max_length=250)

    def __str__(self):
        return f'{self.name}'


class PermiStatus(models.Model):
    '''
    STATUS of Permissions ex. Accepted, Rejected , Pending etc.
    '''
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = name = models.CharField(max_length=250)

    def __str__(self):
        return f'{self.name}'


class Permi(models.Model):
    ''' 
    Base Class for Society Permissions and Girls Permissions
    '''
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    in_time = models.DateTimeField()
    out_time = models.DateTimeField()
    date_created = models.DateTimeField(default=timezone.now, editable=False)
    status = models.ForeignKey(PermiStatus, on_delete=models.PROTECT)
    # Created by User Profile
    comment = models.TextField(max_length=500)


class SocietyPermi(Permi):
    # From Timetable Location Logic
    room = models.ForeignKey(Location, on_delete=models.PROTECT)
    society = models.ForeignKey(Society, on_delete=models.PROTECT)


class GirlsPermi(Permi):

    room = models.ForeignKey(Room, on_delete=models.PROTECT)
    # From Hostel Room Location Logic
    destination = models.TextField(max_length=256, null=True)
    category = models.ForeignKey(PermiCategory, on_delete=models.PROTECT)
    student = models.ForeignKey(Student, on_delete=models.PROTECT)
