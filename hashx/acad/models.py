from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from django.utils import timezone
import uuid
from django.utils.text import slugify



class Semester(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    # This is for whole semester
    start = models.DateTimeField(default=timezone.now)
    end = models.DateTimeField(default=timezone.now)

    status = [
        ('ODD', 'ODD'),
        ('EVEN', 'EVEN')
    ]

    status = models.CharField(max_length=4, choices=status)

    def __str__(self):
        return f" {self.status} Sem {self.name}"


class DrivefolderManager(models.Manager):
    def get_by_natural_key(self, year, drive_id):
        return self.get(year=year, drive_id=drive_id)


class Drivefolder(models.Model):
    """ 
    This Models Contains Drive folder IDs 
    with there Folder Type Year and subject : w
    It is just for internal Processing 
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=30, blank=True, null=True)
    drive_id = models.CharField(max_length=33)
    year = models.SmallIntegerField(blank=True, null=True)
    file_name = models.CharField(max_length=50)

    objects = DrivefolderManager()

    class Meta:
        verbose_name_plural = "Drive ID"
        unique_together = [['year', 'drive_id']]

    def __str__(self):
        return f"{self.name} {self.drive_id} {self.year} {self.file_name}"


class CourseManager(models.Manager):
    def get_by_natural_key(self, name, code):
        return self.get(name=name, code=code)


class Course(models.Model):

    class Meta:
        verbose_name = "Course"
        verbose_name_plural = "Courses"
        unique_together = [['name', 'code']]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=75)
    code = models.CharField(max_length=10)
    course_site = models.URLField()  # Links to old field of the site
    is_elective = models.BooleanField(default=False)

    credit = models.DecimalField(default=0.0, decimal_places=1, max_digits=3)
    l = models.PositiveSmallIntegerField(
        default=None, blank=True, null=True)
    t = models.PositiveSmallIntegerField(
        default=None, blank=True, null=True)
    p = models.PositiveSmallIntegerField(
        default=None, blank=True, null=True)

    mst = models.PositiveSmallIntegerField(
        default=None, blank=True, null=True)
    tut_ses = models.PositiveSmallIntegerField(
        default=None, blank=True, null=True)
    lab_proj = models.PositiveSmallIntegerField(
        default=None, blank=True, null=True)
    quiz = models.PositiveSmallIntegerField(
        default=None, blank=True, null=True)
    est = models.PositiveSmallIntegerField(
        default=None, blank=True, null=True)

    created_date = models.DateTimeField(
        default=timezone.now, blank=True, null=True)
    # textbook = models.ForeignKey(Textbook, on_delete=models.CASCADE)
    syllabus = models.TextField()  # Need this to markdown

    objects = CourseManager()

    def __str__(self):
        return f"{self.name} {self.code} "

    def get_absolute_url(self):
        return reverse("course-detail", kwargs={"pk": self.pk})


class BranchManager(models.Manager):
    def get_by_natural_key(self, code, year):
        return self.get(code=code, year=year)


class Branch(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    class Meta:
        verbose_name = "Branch"
        verbose_name_plural = "Branches"
        unique_together = [['code', 'year']]

    YEAR_IN_SCHOOL_CHOICES = [
        ("FR", "Freshman"),
        ("SO", "Sophomore"),
        ("JR", "Junior Year"),
        ("SR", "Senior Year"),
    ]

    year = models.CharField(max_length=15, choices=YEAR_IN_SCHOOL_CHOICES)
    code = models.CharField(max_length=5, default=None, blank=True, null=True)
    name = models.CharField(max_length=75, default=None, blank=True, null=True)
    course = models.ManyToManyField(
        Course, default=None, blank=True)  # Important for SETUP

    # To Label passed out branches and give them away
    passed_out = models.BooleanField(default=False)
    # The Above Course Many To Many Field will be used always
    # for checking out which subjects the student is categories to
    created_date = models.DateTimeField(default=timezone.now, editable=False)
    YEARS = [
        (2021, 2021),
        (2022, 2022),
        (2023, 2023),
        (2024, 2024),
    ]
    batch_of = models.IntegerField(choices=YEARS, null=True)

    objects = BranchManager()

    def __str__(self):
        y = self.year

        if self.year == 'JR':
            y = '3rd Y'
        elif self.year == 'SO':
            y = '2nd Y'
        elif self.year == 'SR':
            y = '4th Year'
        elif self.year == 'FR':
            y = '1st Year'
        return f"{y} {self.name} ({self.code})"

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


class BatchManager(models.Manager):
    def get_by_natural_key(self, branch, num):
        return self.get(branch=branch, num=num)


class Batch(models.Model):
    """

    Valid Only for 2 - 4th Year 
    When 2-4 year user Signs Up this is the Batch to be alloted

    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    branch = models.ForeignKey(Branch, on_delete=models.PROTECT)
    num = models.IntegerField()  # 1..N
    GR = models.OneToOneField(User, on_delete=models.PROTECT, null=True)
    created_date = models.DateTimeField(default=timezone.now, editable=False)

    objects = BatchManager()

    class Meta:
        verbose_name = "Batch"
        verbose_name_plural = "Batchs"
        unique_together = [['branch', 'num']]

    def __str__(self):
        return f"{self.branch.year} {self.branch.code} {str(self.num)}"

    def get_absolute_url(self):
        return reverse("batch-detail", kwargs={"pk": self.pk})


class Textbook(models.Model):
    """
    This Model Can be used by Teachers to Upload Official Books Or Something
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=128, unique=True)
    auth_name = models.CharField(max_length=128)
    publisher = models.CharField(max_length=64)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    created_date = models.DateTimeField(default=timezone.now, editable=False)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    published = models.BooleanField(default=True)
    date_modified = models.DateTimeField(default=timezone.now)
    slug = models.SlugField(null=True)

    class Meta:
        verbose_name = "Textbook"
        verbose_name_plural = "Textbooks"

    def __str__(self):
        return f"{self.name} {self.auth_name}"

    def get_absolute_url(self):
        return reverse("textbook-detail", kwargs={"pk": self.pk})

    def save(self, *args, **kwargs):
        # Slugify the name
        self.slug = slugify(self.name)
        self.date_modified = timezone.now()
        super(Textbook, self).save(*args, **kwargs)


class FileType(models.Model):
    """
    Used to Mark wether this file is a 
    Tutorial File, Tutorial Solution File or a Notes File. etc. depending on
    the needs and requirements of the course 

    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=64, unique=True)
    slug = models.SlugField(null=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        # Slugfy the name for readabilty links
        self.slug = slugify(self.name)
        super(FileType, self).save(*args, **kwargs)


class FileTags(models.Model):
    """
    No description needed
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=64, unique=True)

    slug = models.SlugField(null=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        # Slugfy the name for readabilty links
        self.slug = slugify(self.name)
        super(FileTags, self).save(*args, **kwargs)


class File(models.Model):
    """
    Not More than 10 file upload day per day per 
    user so that traffic is handleable
    Functions work for the models need to built in.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    type = models.ForeignKey(
        FileType, on_delete=models.PROTECT, null=True, blank=True)
    tags = models.ManyToManyField(FileTags)
    file = models.FileField(upload_to="academic_File", max_length=255)
    thumbnail_image = models.ImageField(
        upload_to="academic_file_thumbnails", null=True, blank=True
    )
    # Main Object
    date_posted = models.DateTimeField(default=timezone.now, editable=False)
    date_modified = models.DateTimeField(default=timezone.now)
    name = models.CharField(max_length=200)
    about = models.TextField(max_length=512, null=True, blank=True)
    # This Allows anytype of user to post on the website checks
    # needed for authorization.
    user = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True)
    # Connect this with any Academic Object that is required.
    course = models.ForeignKey(
        Course, on_delete=models.SET_NULL, null=True, blank=True)
    branch = models.ForeignKey(
        Branch, on_delete=models.SET_NULL, null=True, blank=True)
    # Batch Specific Academic Files are also entertained.
    # So That specific stuff could be made.
    # Keep Batch Support for Later Stages
    batch = models.ForeignKey(Batch, on_delete=models.SET_NULL, null=True)
    file_id = models.CharField(max_length=100, null=True)
    web_content_link = models.URLField(max_length=150, null=True)
    web_view_link = models.URLField(max_length=150, null=True)
    # drivefolder = models.ForeignKey(Drivefolder, on_delete=models.PROTECT)
    # Turn this off to False after inital DB Setup
    published = models.BooleanField(default=True)
    admin_starred = models.BooleanField(default=False)
    # in UI a star to show as if like Editor's Choice Stuff
    is_reviewed = models.BooleanField(default=False)
    # Is Reviewed is a File that has been checked by an independent Fact Checker!
    slug = models.SlugField(blank=True, null=True, max_length=255)
    is_downloaded = models.BooleanField(default=False)
    amazon_url = models.TextField(blank=True , default = '')

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        # Slugify the name for the URL
        self.slug = slugify(self.name)
        self.date_modified = timezone.now()
        super(File, self).save(*args, **kwargs)

class AcademicCalendar(models.Model):  # Don't make mutations of this model
    """
    Refer to doc : https://drive.google.com/file/d/1NZLMKmbKw_S0W0MKPcbpGS9RUSddqBNl/view
    for poulating this Data in Database 
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    semester = models.ForeignKey(
        Semester, on_delete=models.PROTECT, null=True)
    name = models.CharField(max_length=256)
    start_date = models.DateField()
    end_date = models.DateField()

    slug = models.SlugField(blank=True, null=True)

    def save(self, *args, **kwargs):
        # Slugify the name for the URL
        self.slug = slugify(self.name)
        super(AcademicCalendar, self).save(*args, **kwargs)


class Department(models.Model):
    """
    Departments for all teachers and Courses
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
