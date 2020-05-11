import graphene
import django_filters
from .models import Society, Event
from django.db import models
from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField


class SocietyFilter(django_filters.FilterSet):
    class Meta:
        model = Society
        fields = '__all__'
        filter_overrides = {
            models.ImageField :{
                'filter_class' : django_filters.CharFilter,
                'extra' : lambda f:{
                    'lookup_expr': 'icontains'
                }
            }
        }
        
class SocietyNode(DjangoObjectType):
    class Meta:
        model = Society
        interfaces = (graphene.relay.Node , )
    
class EventFilter(django_filters.FilterSet):
    class Meta:
        model = Event
        fields = '__all__'
        filter_overrides = {
            models.ImageField :{
                'filter_class' : django_filters.CharFilter,
                'extra' : lambda f:{
                    'lookup_expr': 'icontains'
                }
            }
        }
class EventNode(DjangoObjectType):
    class Meta:
        model = Event
        interfaces = (graphene.relay.Node , )
    




class RelayQuery(graphene.ObjectType):
    node = graphene.relay.Node.Field()
    all_event =  DjangoFilterConnectionField(EventNode , filterset_class=EventFilter)
    event = graphene.relay.Node.Field(EventNode)
    all_society =  DjangoFilterConnectionField(SocietyNode , filterset_class=SocietyFilter)
    society = graphene.relay.Node.Field(SocietyNode)
