from .models import Notifications
from forum.models import Reply, Like , Question
from django.dispatch import receiver
from acad.models import File , Course
from django.core.exceptions import PermissionDenied
from django.db.models.signals import post_save, pre_save

@receiver(post_save , sender=Reply)
def on_reply(sender , instance , created , **kwargs):
    if created:
        question = Question.objects.get(pk=instance.question.id)
        question_by = question.owner
        engaged_users = []
        for replies in question.reply_set.all():
            engaged_users.append(replies.creator)
        """send mail and notification to question asked by  and all the users following the  question
            do reverse lookup of users"""
@receiver(post_save , sender = Like)
def on_like(sender , instance , created , **kwargs):
    if created:
        """sent it to the owner of the reply or question"""

@receiver(post_save , sender=Question)
def on_question(sender , instance , created, **kwargs):
    if created:
        course = instance.file.course
        """ get users in that particular course"""j
        