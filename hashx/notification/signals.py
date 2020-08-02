from django.dispatch import receiver
from django.db.models.signals import post_save, pre_save
from .email import sendEmail
from .fcm import sendNotifications
from forum.models import Question , Reply 
from .models import Notification


@receiver(post_save, sender=Reply)
def reply_notifications(sender, instance, created, **kwargs):
    if created:
        reply = instance
        question = reply.question
        question_title = f'New Reply on {question.file.name}\'s discussion'
        question_body = question.title
        extra = '{"data" : "oolala"}'
        notification = Notification.objects.create(title=question_title , body=question_body , extra = extra)
        notification.save()
        replies = Reply.objects.filter(question=question)
        for rep in replies:
            notification.users.add(rep.creator)
        notification.users.remove(reply.creator)
        notification.users.add(question.owner)
        notification.save()
        # extra  = '{"data" : 'f"There is a new reply to your question {question.title}. {reply.creator} says \"{reply.content}\""'




