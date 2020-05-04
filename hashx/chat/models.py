from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
import uuid
# Create your models here.


class ChatRoom(models.Model):
    # Can be used as an Abstract Class for Chat Rooms
    ROOMTYPE = [
        ('group', 'group'),  # The Gold Group Chat Label
        ('private', 'private'),  # Private are one to one Chat Roomes
        ('public', 'public')  # Anyone can Join Like a BroadCast in Telegram
    ]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    type = models.CharField(max_length=15, choices=ROOMTYPE)
    participants = models.ManyToManyField(User)
    time_created = models.DateTimeField(default=timezone.now, editable=False)
    # For Group Chat and Broadcast Rooms
    name = models.CharField(max_length=256, null=True)


class Message(models.Model):
    """
    Message Class for Chat Application
    """
    TYPE = [
        ("image", "image"),
        ("text", "text"),
        ("audio", "audio"),
        ("video", "video"),
    ]
    type = models.CharField(max_length=10, choices=TYPE, default="text")
    # Text Content of the message
    content = models.TextField(max_length=256, null=True)
    media = models.FileField(upload_to="chatmediafile",
                             null=True)  # Limits on media file
    from_user = models.ForeignKey(
        User, related_name='from_user',
        on_delete=models.SET_NULL,
        null=True)
    delivered_user = models.ManyToManyField(
        User, related_name='delivered_user')  # Many to Many Field Used Because of GroupChat Functionality

    seen_user = models.ManyToManyField(User, related_name='seen_user')
    # Many to Many Field Used Because of GroupChat Functionality
    date_created = models.DateTimeField(default=timezone.now, editable=False)
    room = models.ForeignKey(ChatRoom, on_delete=models.SET_NULL, null=True)
