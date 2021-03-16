from django.db import models
from django.contrib.auth.models import User
from acad.models import Branch, Batch, Course, Textbook, FirstYearBatch, File
from django.utils import timezone
from profanity.validators import validate_is_profane
from django.db.models.signals import post_save
import uuid


class Verification(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(default=None, blank=True, null=True, unique=True)
    rollno = models.IntegerField(null=True, unique=True)

    def __str__(self):
        return f'{self.email} {self.rollno}'


class Student(models.Model):
    ''' Student Model Containg Data of Student, One to One Connection to User Class
        One to One Relation to Branch Class ( Branch Class contains both Branch and Year)
        Also Contains 
        1. A Bio of Student
        2. Profile Image 
        3. Contributions 
        4. List of Uploaded Documents
        5. Points of Activity      
    '''
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(User, related_name='student',
                                related_query_name='student',  on_delete=models.CASCADE)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    bio = models.CharField(max_length=256, validators=[validate_is_profane])
    rollno = models.IntegerField(null=True, blank=True)
    branch = models.ForeignKey(Branch, on_delete=models.PROTECT)
    batch = models.ForeignKey(
        Batch,  on_delete=models.PROTECT, null=True, blank=True)
    subscribed_courses = models.ManyToManyField(Course)
    firstyearbatch = models.ForeignKey(
        FirstYearBatch, on_delete=models.PROTECT, null=True, blank=True)
    points = models.DecimalField(default=0, max_digits=20, decimal_places=2)
    GENDER_CHOICES = [
        ('M', 'MALE'),
        ('F', 'FEMALE'),
        ('T', 'TRANSGENDER')
    ]
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    created_date = models.DateTimeField(
        default=timezone.now, blank=True, null=True)
    # starred Files of any particular user
    starred_files = models.ManyToManyField(File, blank=True)
    # Email Verification token sent on url
    token = models.UUIDField(default=uuid.uuid4)
    matched_in_database = models.BooleanField(default=False)
    # invite logic
    invited_code = models.CharField(max_length=8, null=True)

    def __str__(self):
        return f'{self.user.username} Profile'

    def save(self, *args, **kwargs):

        if self.batch.branch != self.branch:
            raise ValidationError("The Branch and Batch Don't Match")
        else:
            super().save(*args, **kwargs)

        # img = Image.open(self.image.path)
        # if img.height > 300 or img.width > 300 :
        #     output_size =( 300,300)
        #     img.thumbnail(output_size)
        #     img.save(self.image.path)


class Instructor(models.Model):

    DEPARTMENTS = [
        ("CHEM", "Chemical"),
        ("BT", "Biotechnology"),
        ("CIV", "Civil"),
        ("COMP", "Computer"),
        ("EI", "Electrical and Instrumentation"),
        ("EC", "Electronics and Communication"),
        ("MECH", "Mechanical"),
        ("SCBC", "School of Chemistry and Biochemistry"),
        ("SEE", "School of Energy and Environment"),
        ("SMSS", "School of Humanities & Social Sciences"),
        ("SOM", "School of Mathematics"),
        ("SPMS", "School of Physics & Materials Science"),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)
    user = models.OneToOneField(User, related_name='instructor',
                                related_query_name='instructor',  on_delete=models.CASCADE, null=True)
    course_codinator = models.BooleanField(default=None, blank=True, null=True)
    email = models.EmailField(default=None, blank=True, null=True)
    department = models.CharField(
        max_length=50, null=True, blank=True, choices=DEPARTMENTS)
    office = models.CharField(max_length=5)
    course = models.ManyToManyField(Course)
    batches = models.ManyToManyField(Batch)
    firstyearbatches = models.ManyToManyField(FirstYearBatch)
    role = models.CharField(max_length=100)
    specialisation = models.CharField(max_length=500)
    biography = models.CharField(max_length=10000)
    created_date = models.DateTimeField(
        default=timezone.now, blank=True, null=True)
    token = models.UUIDField(
        unique=True, default=uuid.uuid4, editable=False)
    is_email_verified = models.BooleanField(default=False)
    # Teacher Codes in Timetable
    code = models.CharField(max_length=3, default='AAA')

    class Meta:
        verbose_name = ("Instructor")
        verbose_name_plural = ("Instructors")

    def __str__(self):
        return f'{self.name} {self.email}'

    def get_absolute_url(self):
        return reverse("instructor-detail", kwargs={"pk": self.pk})
