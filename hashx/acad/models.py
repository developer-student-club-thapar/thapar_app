from django.db import models
from django.contrib.auth.models import User
from PIL import Image
from django.urls import reverse
from django.core.exceptions import ValidationError
from django.utils import timezone
import uuid
# Create your models here.


class Drivefolder(models.Model):
    """ 
    This Models Contains Drive folder IDs with there Folder Type Year and subject : w
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=30, blank=True, null=True)
    drive_id = models.CharField(max_length=33)
    year = models.SmallIntegerField(blank=True, null=True)
    file_name = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "Drive ID"

    def __str__(self):
        return f'{self.name} {self.drive_id} {self.year} {self.file_name}'


class Course(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=35)
    code = models.CharField(max_length=10)
    course_site = models.URLField()  # Links to old field of the site

    credit = models.DecimalField(default=0.0, decimal_places=1, max_digits=3)
    l = models.PositiveSmallIntegerField(default=None, blank=True, null=True)
    t = models.PositiveSmallIntegerField(default=None, blank=True, null=True)
    p = models.PositiveSmallIntegerField(default=None, blank=True, null=True)

    mst = models.PositiveSmallIntegerField(default=None, blank=True, null=True)
    tut_ses = models.PositiveSmallIntegerField(
        default=None, blank=True, null=True)
    lab_proj = models.PositiveSmallIntegerField(
        default=None, blank=True, null=True)
    quiz = models.PositiveSmallIntegerField(
        default=None, blank=True, null=True)
    est = models.PositiveSmallIntegerField(default=None, blank=True, null=True)

    created_date = models.DateTimeField(
        default=timezone.now, blank=True, null=True)
    # textbook = models.ForeignKey(Textbook, on_delete=models.CASCADE)
    syllabus = models.TextField()  # Need this to makdown

    class Meta:
        verbose_name = ("Course")
        verbose_name_plural = ("Courses")

    def __str__(self):
        return f'{self.name} {self.code} '

    def get_absolute_url(self):
        return reverse("course-detail", kwargs={"pk": self.pk})


class Branch(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    class Meta:
        verbose_name = ("Branch")
        verbose_name_plural = ("Branches")

    YEAR_IN_SCHOOL_CHOICES = [
        ('FR', 'Freshman'),
        ('SO', 'Sophomore'),
        ('JR', 'Junior Year'),
        ('SR', 'Senior Year')
    ]

    year = models.CharField(max_length=2, choices=YEAR_IN_SCHOOL_CHOICES)
    code = models.CharField(max_length=3, default=None, blank=True, null=True)
    name = models.CharField(max_length=35, default=None, blank=True, null=True)
    course = models.ManyToManyField(Course, default=None, blank=True)
    # The Above Course Many To Many Field will be used always for checking out which subjects the student is categories to
    created_date = models.DateTimeField(
        default=timezone.now, editable=False)

    def __str__(self):
        return f'{self.year} {self.name} ({self.code}) {self.created_date}'

    def get_absolute_url(self):
        return reverse("branch-detail", kwargs={"pk": self.pk})


class FirstYearBatch(models.Model):
    """
    This is being designed For For Handling Batchs for First Year 
    cause they follow a different pattern than most, rest 3 years ( 2 - 4 )
    When First Year Signs Up this is the Batch to be alloted
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    code = models.CharField(max_length=1)  # Batch Code Stuff ABCD...MNOP Part
    no = models.PositiveSmallIntegerField()  # 1..5
    GR = models.OneToOneField(User, on_delete=models.CASCADE)
    created_date = models.DateTimeField(default=timezone.now, editable=False)


class Batch(models.Model):
    """
    Valid Only for 2 - 4th Year 
    When 2-4 yearuser Signs Up this is the Batch to be alloted
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE)
    num = models.IntegerField()  # 1..N
    GR = models.OneToOneField(User, on_delete=models.PROTECT, null=True)
    created_date = models.DateTimeField(default=timezone.now, editable=False)

    class Meta:
        verbose_name = ("Batch")
        verbose_name_plural = ("Batchs")

    def __str__(self):
        return f'{self.branch.year} {self.branch.code} {str(self.num)}'
    def get_absolute_url(self):
        return reverse("batch-detail", kwargs={"pk": self.pk})


class Textbook(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=128)
    auth_name = models.CharField(max_length=128)
    publisher = models.CharField(max_length=64)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    created_date = models.DateTimeField(default=timezone.now, editable=False)

    class Meta:
        verbose_name = ("Textbook")
        verbose_name_plural = ("Textbooks")

    def __str__(self):
        return f'{self.name} {self.auth_name}'

    def get_absolute_url(self):
        return reverse("textbook-detail", kwargs={"pk": self.pk})


class FileType(models.Model):
    """
    Used to Mark weather this file is a Tutorial File, Tutorial Solution File or a Notes File. etc. depednding on
    the needs and requirements of the course 
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=64, unique=True)

    def __str__(self):
        return self.name


class FileTags(models.Model):
    """
    No description needed
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=64, unique=True)

    def __str__(self):
        return self.name


class File(models.Model):
    """
    Not More than 10 file upload day per day per user so that traffic is handleable
    Functions work for the models need to built in.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    type = models.ForeignKey(FileType, on_delete=models.PROTECT)
    tags = models.ManyToManyField(FileTags)
    file = models.FileField(upload_to="academic_File")
    thumbnail_image = models.ImageField(upload_to="academic_file_thumbnails")
    # Main Object
    date_posted = models.DateTimeField(default=timezone.now, editable=False)
    name = models.CharField(max_length=128)
    about = models.TextField(max_length=512, null=True)
    # This Allows anytype of user to post on the website checks neeeded for authrization.
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    # Connect this with any Academic Object that is required.
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True)
    branch = models.ForeignKey(Branch, on_delete=models.SET_NULL, null=True)
    # Batch Specific Academic Files are also entertained.  So That specfic stuff could be made.
    # Keep Batch Support for Later Stages
    batch = models.ForeignKey(Batch, on_delete=models.SET_NULL, null=True)
    drivefolder = models.ForeignKey(Drivefolder, on_delete=models.PROTECT)
    # Turn this off to False after inital DB Setup
    published = models.BooleanField(default=True)

    admin_starred = models.BooleanField(default=False)
    # in UI a star to show as if like Editor's Choice Stuff
    is_reviewed = models.BooleanField(default=False)
    # Is Reviewed is a File that has been checked by an independent Fact Checker!
    slug = models.SlugField(blank=True, null=True)

    def __str__(self):
        return self.name


class AcademicCalendar(models.Model):  # Don't make mutations of this model
    """
    Refer to doc : https://drive.google.com/file/d/1NZLMKmbKw_S0W0MKPcbpGS9RUSddqBNl/view
    for poulating this Data in Database 
    """
    TYPES = [
        ("ODD", "ODD"),
        ("EVEN", "EVEN"),
    ]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    type = models.CharField(choices=TYPES, max_length=30)
    name = models.CharField(max_length=256)
    start_date = models.DateField()
    end_date = models.DateField()
