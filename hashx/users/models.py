from django.db import models
from django.contrib.auth.models import User
from acad.models import Branch, Batch, Course, Textbook, FirstYearBatch, File
from django.utils import timezone
import uuid


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
    bio = models.CharField(max_length=256)
    rollno = models.IntegerField(null=True)
    branch = models.ForeignKey(Branch, on_delete=models.PROTECT)
    batch = models.ForeignKey(Batch,  on_delete=models.PROTECT, null=True)
    firstyearbatch = models.ForeignKey(
        FirstYearBatch, on_delete=models.PROTECT, null=True)
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
    starred_files = models.ManyToManyField(File)
    # Email Verification token sent on url
    token = models.UUIDField(default=uuid.uuid4)

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
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)
    user = models.OneToOneField(User, related_name='instructor',
                                related_query_name='instructor',  on_delete=models.CASCADE, null=True)
    course_codinator = models.BooleanField(default=None, blank=True, null=True)
    email = models.EmailField(default=None, blank=True, null=True)
    office = models.CharField(max_length=5)
    course = models.ManyToManyField(Course)
    created_date = models.DateTimeField(
        default=timezone.now, blank=True, null=True)

    class Meta:
        verbose_name = ("Instructor")
        verbose_name_plural = ("Instructors")

    def __str__(self):
        return f'{self.name} {self.email}'

    def get_absolute_url(self):
        return reverse("instructor-detail", kwargs={"pk": self.pk})
