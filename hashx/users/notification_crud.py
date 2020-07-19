from push_notifications.models import GCMDevice
from hashx.mixins import AuthenticatedNode
from graphql_relay.node.node import from_global_id
import graphene
from django.contrib.auth.models import User
from hashx.decorators import every_authenticated

class CreateFCMDevice(graphene.relay.ClientIDMutation):
    registered = graphene.Boolean()

    class Input:
        device_id = graphene.String()
        registeration_id = graphene.String()
        name = graphene.String()

    @classmethod
    @every_authenticated
    def mutate_and_get_payload(cls , root , info , **input):
        user = info.context.user
        device_id = input.get('device_id')
        name = input.get('name')
        registeration_id = input.get('registeration_id')
        fcm_device = GCMDevice.objects.create(registration_id=registeration_id ,name=name , device_id = device_id ,cloud_message_type="FCM" , user=user,)
        fcm_device.save()
        return CreateFCMDevice(registered = True)

class UpdateFCMDevice(graphene.relay.ClientIDMutation):
    updated = graphene.Boolean()
    class Input:
        device_id = graphene.String()
        registeration_id = graphene.String()
    @classmethod
    @every_authenticated
    def mutate_and_get_payload(cls,root, info, **input):
        device_id = input.get('device_id')
        registeration_id = input.get('registeration_id')
        fcm_device = GCMDevice.objects.get(device_id = device_id)
        if registeration_id:
            fcm_device.registration_id = registeration_id 
        fcm_device.save()
        return UpdateFCMDevice(updated = True)


    
