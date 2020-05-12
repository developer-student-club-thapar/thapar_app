from .models import Event
from graphql_relay.node.node import from_global_id
from .schema import EventNode
import graphene
from graphene_django.types import DjangoObjectType
class CreateEvent(graphene.relay.ClientIDMutation):
    event = graphene.Field(EventNode)
    class Input:
        title = graphene.String()
        content = graphene.String()
        date_posted = graphene.types.datetime.DateTime()
        date_modified = graphene.types.datetime.DateTime()
        start_time = graphene.types.datetime.Time()
        end_time = graphene.types.datetime.Time()
        place = graphene.String()
        inCampus = graphene.Boolean()
        location = graphene.String()
        location_url = graphene.String()
        society = graphene.String()
            
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        title = input.get('title')
        content = input.get('content')
        date_posted = input.get('date_posted')
        date_modified = input.get('date_modified')
        start_time = input.get('start_time')
        end_time = input.get('end_time')
        place = input.get('place')
        inCampus = input.get('inCampus')
        location = input.get('location')
        location_url = input.get('location_url')
        society = input.get('society')
        poster_image = info.context.FILES['poster_image'] 
        event = Event(title=title , content= content , date_posted=date_posted , date_modified = date_modified , start_time = start_time , end_time=end_time , place=place , inCampus=inCampus , location = location , location_url  = location_url , society=society)
        event.save()
        if poster_image:
            event.poster_image = poster_image
        event.save()
        return  CreateEvent(event=event)
class UpdateEvent(graphene.relay.ClientIDMutation):
    event = graphene.Field(EventNode)
    class Input:
        id = graphene.String()
        title = graphene.String()
        content = graphene.String()
        date_posted = graphene.types.datetime.DateTime()
        date_modified = graphene.types.datetime.DateTime()
        start_time = graphene.types.datetime.Time()
        end_time = graphene.types.datetime.Time()
        place = graphene.String()
        inCampus = graphene.Boolean()
        location = graphene.String()
        location_url = graphene.String()
        society = graphene.String()
        
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        title = input.get('title')
        content = input.get('content')
        date_posted = input.get('date_posted')
        date_modified = input.get('date_modified')
        start_time = input.get('start_time')
        end_time = input.get('end_time')
        place = input.get('place')
        inCampus = input.get('inCampus')
        location = input.get('location')
        location_url = input.get('location_url')
        society = input.get('society')
        poster_image = info.context.FILES['poster_image'] 
        event = Event.objects.get(pk=id)
        if title:
            event.title = title
        if content:
            event.content = content
        if date_posted:
            event.date_posted = date_posted
        if date_modified:
            event.date_modified = date_modified
        if start_time:
            event.start_time = start_time
        if end_time:
            event.end_time = end_time
        if place:
            event.place = place
        if inCampus:
            event.inCampus = inCampus
        if location:
            event.location = location
        if location_url:
            event.location_url = location_url
        if society:
            event.society = society
        if poster_image:
            event.poster_image = poster_image
        
        event.save()
        return UpdateEvent(event=event)