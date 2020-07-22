import graphene
import django_filters
from graphene_django.filter import DjangoFilterConnectionField
from .models import Society, Event
from django.db import models
from graphene_django.types import DjangoObjectType
from hashx.mixins import ViewAllAuthenticatedQuery , AuthenticatedNode , AuthenticatedNode


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
        interfaces = (AuthenticatedNode , )
    
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
        interfaces = (AuthenticatedNode , )
    




class RelayQuery(graphene.ObjectType):
    all_event =  ViewAllAuthenticatedQuery(EventNode , filterset_class=EventFilter)
    event = AuthenticatedNode.Field(EventNode)
    all_society =  ViewAllAuthenticatedQuery(SocietyNode , filterset_class=SocietyFilter)
    society = AuthenticatedNode.Field(SocietyNode)
