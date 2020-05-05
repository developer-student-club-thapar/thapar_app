from django.db import models
import uuid
from django.contrib.auth.models import User
# Create your models here.
# Refrenced from https://github.com/MicroPyramid/django-simple-forum/blob/master/django_simple_forum/models.py


class Facebook(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET, null=True)
    facebook_id = models.CharField(max_length=100)
    facebook_url = models.CharField(max_length=200, default='')
    first_name = models.CharField(max_length=200, default='')
    last_name = models.CharField(max_length=200, default='')
    verified = models.CharField(max_length=200, default='')
    name = models.CharField(max_length=200, default='')
    language = models.CharField(max_length=200, default='')
    hometown = models.CharField(max_length=200, default='')
    email = models.CharField(max_length=200, default='',)
    gender = models.CharField(max_length=200, default='')
    dob = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=200, default='')
    timezone = models.CharField(max_length=200, default='')
    accesstoken = models.CharField(max_length=2000, default='')


class Google(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET, null=True)
    google_id = models.CharField(max_length=200, default='')
    google_url = models.CharField(max_length=1000, default='')
    verified_email = models.CharField(max_length=200, default='')
    family_name = models.CharField(max_length=200, default='')
    name = models.CharField(max_length=200, default='')
    picture = models.CharField(max_length=200, default='')
    gender = models.CharField(max_length=10, default='')
    dob = models.CharField(max_length=50, default='')
    given_name = models.CharField(max_length=200, default='')
    email = models.CharField(max_length=200, default='', db_index=True)


class GitHub(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET, null=True)
    git_url = models.URLField()
    git_id = models.CharField(max_length=50)
    disk_usage = models.CharField(max_length=200)
    private_gists = models.IntegerField(default=0)
    public_gists = models.IntegerField(default=0)
    public_repos = models.IntegerField(default=0)
    hireable = models.BooleanField(default=False)
    total_private_repos = models.IntegerField(default=0)
    owned_private_repos = models.IntegerField(default=0)
    following = models.IntegerField(default=0)
    followers = models.IntegerField(default=0)
    company = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    user_from = models.DateTimeField()


class Twitter(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET, null=True)
    twitter_id = models.CharField(max_length=100, default='')
    screen_name = models.CharField(max_length=100, default='')
    oauth_token = models.CharField(max_length=200, default='')
    oauth_secret = models.CharField(max_length=200, default='')
