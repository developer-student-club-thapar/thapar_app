from django.utils import timezone
import uuid
from django.db import models
from acad.models import Course, Batch, Branch, FirstYearBatch

# The Idea behind making different models behind Exam mdols are that
# some exams anre Course wide hosted on a single Day like MST or EST
# Or hosted in Tutorials or Batch Specefic Times and not for the whole Branch


# Validation work for logic models si pending


class ExamBase(models.Model):
    '''
        Base  Class For Exam Models 
    '''

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # All Courses are connected to specefic Branches and Batches and data can be queried from there
    # On Creation
    name = models.CharField(max_length=128)
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True)
    date = models.DateTimeField()  # date and Time of Exam
    date_created = models.DateTimeField(default=timezone.now, editable=False)
    note = models.TextField(max_length=500)  # side note to exam
    # If published is False the Exam gets deleted
    published = models.BooleanField(default=True)


class AssesmentType(models.Model):
    '''
        Assesntment Types like Sessiona , Viva , Lab any random Evaluation Type
    '''
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=128)


class Assesment(ExamBase):
    '''
        Annoucements of Sessional Test
    '''
    type = models.ForeignKey(AssesmentType, on_delete=models.PROTECT)

    # Either Batch is connected or Firstybatch is connected to the Models - Validation Needed
    batch = models.ForeignKey(Batch, on_delete=models.SET_NULL, null=True)
    firstyearbatch = models.ForeignKey(
        FirstYearBatch, on_delete=models.SET_NULL, null=True)


class Examination(ExamBase):
    '''
    These are Exams that are announced on webkiosk majourly Mid Semester Test or End Semester Test
    '''
    EXAM_TYPES = [
        ('MST', 'Mid Semester Examination'),
        ('EST', 'End Semster Examination')
    ]
    type = models.CharField(max_length=25, choices=EXAM_TYPES)
