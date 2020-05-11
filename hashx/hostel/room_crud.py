from .models import Room
from graphql_relay.node.node import from_global_id
from .schema import RoomNode
import graphene
from graphene_django.types import DjangoObjectType

class CreateRoom(graphene.relay.ClientIDMutation):
    room = graphene.Field(RoomNode)
    
    class Input:
        hostel = graphene.String()
        wing = graphene.String()
        num = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        hostel = input.get('hostel')
        wing = input.get('wing')
        num = input.get('num')
        room = Room(hostel=hostel, wing=wing, num=num)

        room.save()
        return CreateRoom(room=room)


class UpdateRoom(graphene.relay.ClientIDMutation):
    room = graphene.Field(RoomNode)
    
    class Input:
        id = graphene.String()
        hostel = graphene.String()
        wing = graphene.String()
        num = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        hostel = input.get('hostel')
        wing = input.get('wing')
        num = input.get('num')
        room = Room.objects.get(pk=id)

        if hostel:
            room.hostel = hostel

        if wing:
            room.wing = wing

        if num:
            room.num = num
    
        room.save()
        return UpdateRoom(room=room)