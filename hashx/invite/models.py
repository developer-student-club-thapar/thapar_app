from django.db import models
from django.utils.crypto import get_random_string
from django.contrib.auth.models import User


# Create your models here.


class Invite(models.Model):
    user = models.OneToOneField(
        User,  related_name='Invite', on_delete=models.PROTECT,)
    invited_users = models.ManyToManyField(
        User, related_name='Invitees', blank=True)
    invite_code = models.CharField(max_length=8, null=True, unique=True)
    can_invite = models.BooleanField(default=True)
    created_date = models.DateTimeField(
        auto_now=True, blank=True, null=True)

    def __str__(self):
        return f'{self.user.username}'
