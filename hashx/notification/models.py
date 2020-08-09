from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField
from .email import sendEmail
from .fcm import sendNotifications
import uuid

# Create your models here.


class Notification(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length = 250)
    body = models.TextField(max_length = 2000)
    users = models.ManyToManyField(User , default=None , blank =True)
    extra = JSONField()

    def send_email(self):
        try:
            sendEmail(users=self.users , title = self.title , body = self.body , extra = self.extra)
            return True
        except:
            print('Email Not Sent')
            return False
    def send_notifications(self):
        try:
            sendNotifications(users=self.users , title=self.title , body = self.body , extra=self.extra)
            return True
        except:
            print('Notification Not Sent')
            return False

