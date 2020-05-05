from .models import Location
from graphql_relay.node.node import from_global_id
from .schema import LocationNode
import graphene
from graphene_django.types import DjangoObjectType
class CreateLocation(graphene.relay.ClientIDMutation):
    location = graphene.Field(LocationNode)
    class Input:
        building = graphene.String()
        room = graphene.String()
        floor = graphene.Int()
        published = graphene.Boolean()
        longitude = graphene.Float()
        latitute = graphene.Float()
        location_url = graphene.String()
        
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        building = input.get('building')
        room = input.get('room')
        floor = input.get('floor')
        published = input.get('published')
        longitude = input.get('longitude')
        latitude = input.get('latitude')
        location_url = input.get('location_url')
        location = Location(building=building , room=room , floor = floor , published = published  , latitude = latitude , longitude = longitude , location_url = location_url)
        location.save()
        return  CreateLocation(location=location)
class UpdateLocation(graphene.relay.ClientIDMutation):
    location = graphene.Field(LocationNode)
    class Input:
        id = graphene.String()
        building = graphene.String()
        room = graphene.String()
        floor = graphene.Int()
        published = graphene.Boolean()
        longitude = graphene.Float()
        latitute = graphene.Float()
        location_url = graphene.String()
        
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        location = Location.objects.get(pk=id)
        building = input.get('building')
        room = input.get('room')
        floor = input.get('floor')
        published = input.get('published')
        longitude = input.get('longitude')
        latitude = input.get('latitude')
        location_url = input.get('location_url')
        if building:
            location.building = building
        if room:
            location.room = room
        if floor:
            location.floor = floor
        if published:
            location.published = published
        if longitude:
            location.longitude = longitude
        if latitude:
            location.latitude = latitude
        if location_url:
            location.location_url = location_url
        location.save()
        return UpdateLocation(location=location)