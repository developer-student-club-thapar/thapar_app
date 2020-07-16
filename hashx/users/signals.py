from .models import Student, Verification
from django.dispatch import receiver
from asgiref.sync import sync_to_async
from django.core.mail import EmailMessage
from django.contrib.auth.models import User
from django.db.models.signals import post_save, pre_save
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode



# @receiver(post_save, sender=Student)
# def send_cofirm_email(sender , instance , created , **kwargs):
#     if created:
#         sent = signup(instance)
#         if not sent:
#             raise Exception('Email Verification Not Sent')

def signup(student):
    mail_subject = 'Activate your blog account.'
    message = render_to_string('users/account_activate_email.html', {
        'user': student.user,
        'domain': 'localhost:8000',
        'uid':urlsafe_base64_encode(force_bytes(student.pk)),
        'token':student.token,
    })
    to_email = student.user.email
    email = EmailMessage(
                 mail_subject, message, to=[to_email]
    )
    email.send()
    return True


@receiver(pre_save, sender = Student)
def user_verification(sender, instance, *args, **kwargs):
    try:
        v = Verification.objects.get(email = instance.user.email)
        if v:
            print(f'{v.rollno} registered')
            instance.rollno = v.rollno
            instance.matched_in_database = True
    except Exception:
        print(Exception)
        instance.matched_in_database = False