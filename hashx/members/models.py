import sys
from django.db import models
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
from django import forms
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from django.core.mail import send_mail
import uuid
from profanity.validators import validate_is_profane


class Member(models.Model):
    """
        Member Model to Store Data of Creators of the project 
        Though they are Just 3 right now but who knows ?
        Name : CharField
        User : ForeignKey
        Role : CharField
        Github_url : URL Field
        Linkedin_url : URLField
        Twitter_url : URLField
        Medium_url : URLField
        Dev_url : URLField
        Instagram_url : URLField
        Image : imageField
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, related_name='Member', related_query_name='Member',
                             on_delete=models.CASCADE)
    role = models.CharField(max_length=255, blank=True)
    email = models.EmailField()
    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    medium_url = models.URLField(blank=True)
    dev_url = models.URLField(blank=True)
    instagram_url = models.URLField(blank=True)
    image = models.ImageField(
        upload_to='member-profile-images/', blank=True)

    def save(self, *args, **kwargs):
        if not self.id:
            self.image = self.compressImage(self.image)
        super(Member, self).save(*args, **kwargs)

    def compressImage(self, image):
        imageTemproary = Image.open(image)
        outputIoStream = BytesIO()
        # imageTemproaryResized = imageTemproary.resize((1020, 573))
        imageTemproary.save(outputIoStream, format='JPEG', quality=60)
        outputIoStream.seek(0)
        image = InMemoryUploadedFile(outputIoStream, 'ImageField', "%s.jpg" % image.name.split('.')[
            0], 'image/jpeg', sys.getsizeof(outputIoStream), None)
        return image

    def __str__(self):
        return self.name


class VolunteershipType(models.Model):
    """
    This would contain various Volunteership Application Types 
    example Software stuff like React Django , travis or devops or 
    Marketing etc. of this site
    """
    name = models.CharField(max_length=50)
    details = models.TextField(max_length=500)
    mini_logo = models.ImageField(null=True)


class VolunteershipApplication(models.Model):
    # User Type connection for Application of Volunteership
    type = models.ForeignKey(VolunteershipType, on_delete=models.CASCADE)
    why = models.TextField(max_length=1000, validators=[validate_is_profane])
