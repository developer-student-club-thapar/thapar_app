from django.db import models
from django.utils import timezone
from django.urls import reverse
import uuid
from django.contrib.auth.models import User
# Create your models here.


class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=30)
    created = models.DateTimeField(default=timezone.now, editable=False)
    public = models.BooleanField(default=True)

    class Meta:
        ordering = ['name']
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("buzz-category-detail", kwargs={"pk": self.pk})


class HumansPost(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    content = models.TextField(max_length=10000)
    date_posted = models.DateTimeField(default=timezone.now)
    image = models.ImageField(upload_to='humansoftiet_photos')
    person_name = models.CharField(max_length=50)
    person_detail = models.CharField(max_length=50)
    slug = models.SlugField(null=True, blank=True)

    class Meta:
        ordering = ['-date_posted']
        verbose_name_plural = "Humans of TIET Posts"

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("buzz-humanspost-detail", kwargs={"pk": self.pk})


class Miniblog(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    about = models.TextField(max_length=10000)
    date_created = models.DateTimeField(default=timezone.now)
    header_image = models.ImageField(upload_to='headerimage_miniblog_photos')
    verified = models.BooleanField(default=False)
    # Awarded thw quality of Blog that is being written
    points = models.IntegerField(default=0)

    class Meta:
        ordering = ['-name', 'date_created']
        verbose_name_plural = "Mini Blogs"

    def __str__(self):
        return f'{self.name} {self.date_created}'

    def get_absolute_url(self):
        return reverse("buzz-miniblog-detail", kwargs={"pk": self.pk})


class BuzzPost(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    content = models.TextField(max_length=2000)
    date_posted = models.DateTimeField(default=timezone.now, editable=False)
    image = models.ImageField(
        upload_to='buzzPost_photos', blank=True, null=True)
    category = models.ManyToManyField(
        Category, related_name="BuzzPost", related_query_name="BuzzPost")
    slug = models.SlugField(blank=True, null=True)
    miniblog = models.ForeignKey(Miniblog, on_delete=models.CASCADE)
    published = models.BooleanField(default=True)
    is_reviewed = models.BooleanField(default=False)
    editors_choice = models.BooleanField(default=False)

    class Meta:
        ordering = ['-date_posted']
        verbose_name_plural = "Buzz Posts"

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("buzz-buzzpost-detail", kwargs={"pk": self.pk})


class Miniblogreview(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    status = models.BooleanField(default=False)
    miniblog = models.OneToOneField(Miniblog, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    comment = models.TextField(max_length=500)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # Add An function to send Email and Whatsapp Notification to User when Verification Happens

    class Meta:
        verbose_name_plural = "Mini Blog Review "

    def __str__(self):
        return f'{self.miniblog.name} {self.date}'

    def get_absolute_url(self):
        return reverse("buzz-miniblogreview-detail", kwargs={"pk": self.pk})


class BuzzPostReview(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    status = models.BooleanField(default=False)
    buzzpost = models.OneToOneField(BuzzPost, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    comment = models.TextField(max_length=500)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # Add An function to send Email and Whatsapp Notification to User when Verification Happens

    class Meta:
        verbose_name_plural = "Buzz Post"

    def __str__(self):
        return f'{self.buzzpost.title} {self.date}'

    def get_absolute_url(self):
        return reverse("buzz-miniblogreview-detail", kwargs={"pk": self.pk})
