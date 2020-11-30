from notification.models import Notifications
from forum.models import Reply, Like , Question
from django.dispatch import receiver
from acad.models import File , Course , Branch
from django.core.exceptions import PermissionDenied
from django.db.models.signals import post_save, pre_save
from users.models import Student
from notification.utils import NotificationType



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
        notification = Notification.objects.create()

@receiver(post_save , sender = Like)
def on_like(sender , instance , created , **kwargs):
    if created:
        """sent it to the owner of the reply or question"""

@receiver(post_save , sender=Question)
def on_question(sender , instance , created, **kwargs):
    if created:
        course = instance.file.course
        branches  = Branch.objects.filter(course=course)
        enrolled_users = branches.student_set.all()
        notification = Notifications.objects.create(
            title=NotificationType.NewQuestion,
            body = instance.title ,
            user=enrolled_users)
        notification.save()
        
        """ get users in that particular course"""
        