from django.core.mail import EmailMessage
from django.template.loader import render_to_string


"""
Handle all notifications via email here
"""


def sendEmail(users, title, **kwargs):
    body = kwargs.get('body')
    data = kwargs.get('data')
    additonal_data = kwargs.get('extra')

    for user in users:
        mail_subject = title
        message = render_to_string('notification/email_test.html', {
            'user' : user.first_name,
            'body' : body,
            'data' : data,
            # 'additional_data' = additonal_data,
        })
        to_email = user.email
        email = EmailMessage(
            mail_subject, message, to=[to_email]
        )
        email.send()

    return True