import graphene
from graphene_django.types import DjangoObjectType
from .models import Society, Event
from users.schema import UserType

class SocietyType(DjangoObjectType):
    class Meta:
        model = Society
class EventType(DjangoObjectType):
    class Meta:
        model = Event


class Query(object):
    all_society = graphene.List(SocietyType)
    society = graphene.List(
        SocietyType ,
        id=graphene.UUID(),
        name=graphene.String(),
        student_head=graphene.String(),
        category=graphene.String(),
        site_link=graphene.String(),
        logo = graphene.String(),
        image = graphene.String(),
        user = graphene.String()
        )

    def resolve_all_society(self, info, **kwargs):
        return Society.objects.all()

    def resolve_society(self , info , **kwargs):
        id = kwargs.get('id')
        name = kwargs.get('name')
        student_head=kwargs.get('student_head')
        category=kwargs.get('category')
        site_link=kwargs.get('site_link')
        logo = kwargs.get('logo')
        image = kwargs.get('image')
        user = kwargs.get('user')#takes id as input

        if id is not None:
            return Society.objects.filter(pk=id)
        if name is not None:
            return Society.objects.filter(name=name).all()
        if student_head is not None:
            return Society.objects.filter(student_head=student_head).all()
        if category is not None:
            return Society.objects.filter(category=category).all()
        if site_link is not None:
            return Society.objects.filter(site_link=site_link).all()
        if user is not None:
            return Society.objects.filter(user=user).all() 
        return None
        #Add query for returning image and logo path
        
    event = graphene.List(
        EventType,
        id = graphene.UUID(),
        title = graphene.String(),
        content = graphene.String(),
        date_posted = graphene.types.datetime.Date(),
        start_time = graphene.types.datetime.Time(),
        end_time = graphene.types.datetime.Time(),
        place = graphene.String(),
        inCampus = graphene.Boolean(),
        location = graphene.String(),
        society = graphene.String(),
        external_link = graphene.String(),
        poster_image = graphene.String()
        )    

    all_event = graphene.List(EventType)

    def resolve_all_event(self, info, **kwargs):
        return Event.objects.all()

    def resolve_event(self , info , **kwargs):
        id = kwargs.get('id')
        title=kwargs.get('title')
        date_posted=kwargs.get('date_posted')
        start_time=kwargs.get('start_time')
        end_time = kwargs.get('end_time')
        place=kwargs.get('place')
        inCampus=kwargs.get('inCampus')
        location=kwargs.get('location')
        external_link=kwargs.get('external_link')
        society=kwargs.get('society') #takes UUID as argument
        if id is not None:
            return Event.objects.filter(pk=id)
        if title is not None:
            return Event.objects.filter(title=title).all()
        if date_posted is not None:
            return Event.objects.filter(date_posted=date_posted).all()
        if start_time is not None:
            return Event.objects.filter(start_time=start_time).all()
        if end_time is not None:
            return Event.objects.filter(end_time=end_time).all()
        if place is not None:
            return Event.objects.filter(place=place).all()
        if inCampus is not None:
            return Event.objects.filter(inCampus=inCampus).all()
        if location is not None:
            return Event.objects.filter(location=location).all()
        if society is not None:
            return Event.objects.filter(society=society).all()
        if external_link is not None:
            return Event.objects.filter(external_link=external_link).all()
        return None
        #add query for returning poster_image
