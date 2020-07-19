from django.db import models
from django.utils.crypto import get_random_string
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
class Invite(models.Model):
    user = models.OneToOneField(User ,  related_name='Invite' , on_delete = models.PROTECT ,  )
    invited_users = models.ManyToManyField(User , default= None , blank = True)
    invite_code = models.CharField(max_length= 8 , null = True , unique = True)
    created_date = models.DateTimeField(
        default=timezone.now, blank=True, null=True)
    
    def __str__(self):
        return f'{self.user.username}'
    
    