import enum
from push_notifications.models import APNSDevice, GCMDevice
from django.contrib.auth.models import User
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
class NotificationType(enum.Enum):
    NewQuestion = "New Question was uploaded to "
    NewReply = "New Reply on your question "
    NewLike = "New Like"


def send_firebase_notifications(users , title , body , extra=None):
    for user in users:
        if user.gcmdevice_set.exists():
            user_devices = user.gcmdevice_set.all()
            if extra:
                user_devices.send_message(body, title = title ,extra=extra)
            else:
                user_devices.send_message(body, title = title)


def send_email(users , title , subject,  body , extra=None):
    for user in users:
        mail_subject = subject
        message = render_to_string('notifications/email.html', {
            'title': title,
            'body' : body,
        })
        to_email = user.email
        email = EmailMessage(
            mail_subject, message, to=[to_email]
        )
        email.send()