from django.db.models.signals import post_save
from .models import File
from django.dispatch import receiver

@receiver(post_save , sender = File)
def add_url(sender, instance, created, **kwargs):
    if created:
        instance.amazon_url = instance.file.url
        instance.save()