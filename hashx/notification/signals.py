from django.dispatch import receiver
from django.db.models.signals import post_save, pre_save
from .email import sendEmail
from .fcm import sendNotifications
from forum.models import Question , Reply , Like
from .models import Notification
from timetable.models import OnlineClass
from society.models import Event


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


@receiver(post_save , sender = Question)
def question_notifications(sender , instance , created , **kwargs):
    if created:
        question = instance
        file = question.file
        title =  f'New Question Posted on {file.course.name}'
        body = question.title
        # add users on radnoma according to course
        notification = Notification.objects.create(title = question_title , body=body , users=users)
        notification.save()

# @receiver(post_save , sender = Like)
# def liked(sender , instance , created , **kwargs):
#     if created:
#         like = instance

def online_class(sender , instance , created , **kwargs):
    """
    To send these emails at specific times, we will have to use celery. So when we integrate celery,
    we will have to edit this function accordingly.
    """
    online_class = OnlineClass.objects.first()
    meeting_url = online_class.meetingURL
    users = []
    batches = online_class.batch
    for batch in batches:
        students = batch.student_set.all()
        for student in students:
            users.append(student.user)
    time = online_class.period.start_time
    # cours_code = online_class.course.code
    course_name = online_class.course.name
    course_type = online_class.type
    title = f'{course_name} {course_type} starting now!'
    notification = Notification.objects.create(title=title, body = meeting_url, users=users)
    notification.save()

