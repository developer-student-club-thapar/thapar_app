"""Handle all notifications"""
from push_notifications.models import GCMDevice
import json

def sendNotifications(users,title,**kwargs):
    body = kwargs.get('body')
    data = kwargs.get('extra')
    for user in users:
        devices = user.gcmdevice_set.all()
        if data:
            data = json.loads(data)
            devices.send_message(body , title = title)
        devices.send_message(body , title=title)


