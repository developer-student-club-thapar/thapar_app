import graphene
import django_filters
from graphene_django import DjangoObjectType
from hashx.mixins import ViewAllAuthenticatedQuery , InstructorOnlyQuery
from .models import TimetableBoard , Holidays ,Location,Class

class TimetableBoardFilter(django_filters.FilterSet):
    class Meta:
        model = TimetableBoard
        fields = '__all__'
class TimetableBoardNode(DjangoObjectType):
    class Meta:
        model = TimetableBoard
        interfaces = (graphene.relay.Node , )



class HolidaysFilter(django_filters.FilterSet):
    class Meta:
        model = Holidays
        fields = '__all__'
class HolidaysNode(DjangoObjectType):   
    class Meta:
        model = Holidays
        interfaces = (graphene.relay.Node , )


class ClassFilter(django_filters.FilterSet):
    class Meta:
        model = Class
        fields = '__all__'
class ClassNode(DjangoObjectType):
    class Meta:
        model = Class
        interfaces = (graphene.relay.Node , )
class LocationFilter(django_filters.FilterSet):
    class Meta:
        model = Location
        fields = '__all__'
class LocationNode(DjangoObjectType):
    class Meta:
        model = Location
        interfaces = (graphene.relay.Node , )


class RelayQuery(graphene.ObjectType):
    all_timetable =  ViewAllAuthenticatedQuery(TimetableBoardNode , filterset_class=TimetableBoardFilter)
    timetable = graphene.relay.Node.Field(TimetableBoardNode)
    all_holidays =  ViewAllAuthenticatedQuery(HolidaysNode , filterset_class=HolidaysFilter)
    holidays = graphene.relay.Node.Field(HolidaysNode)
    all_locations =  ViewAllAuthenticatedQuery(LocationNode , filterset_class=LocationFilter)
    location = graphene.relay.Node.Field(LocationNode)
    all_classes =  ViewAllAuthenticatedQuery(ClassNode , filterset_class=ClassFilter)
    classes = graphene.relay.Node.Field(ClassNode)
    node = graphene.relay.Node.Field()
