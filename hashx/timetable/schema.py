import graphene
import django_filters
from django_filters import OrderingFilter
from graphene_django import DjangoObjectType
from hashx.mixins import ViewAllAuthenticatedQuery, AuthenticatedNode
from .models import Holidays, Location, OnlineClass, OfflineClass, Period, Class


class PeriodFilter(django_filters.FilterSet):
    class Meta:
        model = Period
        fields = '__all__'



class PeriodNode(DjangoObjectType):
    class Meta:
        model = Period
        interfaces = (AuthenticatedNode, )


class HolidaysFilter(django_filters.FilterSet):
    class Meta:
        model = Holidays
        fields = '__all__'


class HolidaysNode(DjangoObjectType):
    class Meta:
        model = Holidays
        interfaces = (AuthenticatedNode, )


class OnlineClassNode(DjangoObjectType):
    class Meta:
        model = OnlineClass
        interfaces = (AuthenticatedNode, )
        filter_fields = {
            'day' : ['exact'],
            'batch' : ['exact']
        }
        order_by = '-period__start_time'

class LocationFilter(django_filters.FilterSet):
    class Meta:
        model = Location
        fields = '__all__'



class LocationNode(DjangoObjectType):
    class Meta:
        model = Location
        interfaces = (AuthenticatedNode, )


class RelayQuery(graphene.ObjectType):

    all_holidays = ViewAllAuthenticatedQuery(
        HolidaysNode, filterset_class=HolidaysFilter)
    holidays = AuthenticatedNode.Field(HolidaysNode)
    all_locations = ViewAllAuthenticatedQuery(
        LocationNode, filterset_class=LocationFilter)
    location = AuthenticatedNode.Field(LocationNode)
    all_periods = ViewAllAuthenticatedQuery(
        PeriodNode, filterset_class=PeriodFilter)
    periods = AuthenticatedNode.Field(PeriodNode)
    onlineclasses = AuthenticatedNode.Field(OnlineClassNode)
    all_onlineclasses = ViewAllAuthenticatedQuery( OnlineClassNode)
    def resolve_all_onlineclasses(self, info , **kwargs):
        return OnlineClass.objects.order_by('period__start_time')

    
