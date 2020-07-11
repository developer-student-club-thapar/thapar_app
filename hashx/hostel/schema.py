import graphene
from graphql_relay import to_global_id
import django_filters
from graphene_django import DjangoObjectType
from hashx.mixins import ViewAllAuthenticatedQuery , AuthenticatedNode
from .models import Hostel, Complaint, MessUnit, MessUnitComment, ComplaintStatus, ComplaintTypes, Room
from django.db import models

class HostelFilter(django_filters.FilterSet):
    class Meta:
        model = Hostel
        fields = '__all__'
        filter_overrides = {
            models.ImageField :{
                'filter_class' : django_filters.CharFilter,
                'extra' : lambda f:{
                    'lookup_expr': 'icontains'
                }
            }
        }


class HostelNode(DjangoObjectType):
    class Meta:
        model = Hostel
        interfaces = (AuthenticatedNode , )


class ComplaintFilter(django_filters.FilterSet):
    class Meta:
        model = Complaint
        fields = '__all__'
        filter_overrides = {
            models.ImageField :{
                'filter_class' : django_filters.CharFilter,
                'extra' : lambda f:{
                    'lookup_expr': 'icontains'
                }
            }, models.SlugField: {
                'filter_class' : django_filters.CharFilter,
                'extra' : lambda f:{
                    'lookup_expr': 'icontains'
                }
            }
        }


class ComplaintNode(DjangoObjectType):
    class Meta:
        model = Complaint
        interfaces = (AuthenticatedNode , )


class MessUnitFilter(django_filters.FilterSet):
    class Meta:
        model = MessUnit
        fields = '__all__'
        filter_overrides = {
            models.ImageField :{
                'filter_class' : django_filters.CharFilter,
                'extra' : lambda f:{
                    'lookup_expr': 'icontains'
                }
            }, models.SlugField :{
                'filter_class' : django_filters.CharFilter,
                'extra' : lambda f:{
                    'lookup_expr': 'icontains'
                }
                
            }
        } 


class MessUnitNode(DjangoObjectType):
    class Meta:
        model = MessUnit
        interfaces = (AuthenticatedNode , )


class MessUnitCommentFilter(django_filters.FilterSet):
    class Meta:
        model = MessUnitComment
        fields = '__all__'


class MessUnitCommentNode(DjangoObjectType):
    class Meta:
        model = MessUnitComment
        interfaces = (AuthenticatedNode , )


class ComplaintTypesFilter(django_filters.FilterSet):
    class Meta:
        model = ComplaintTypes
        fields = '__all__'


class ComplaintTypesNode(DjangoObjectType):
    class Meta:
        model = ComplaintTypes
        interfaces = (AuthenticatedNode , )


class ComplaintStatusFilter(django_filters.FilterSet):
    class Meta:
        model = ComplaintStatus
        fields = '__all__'


class ComplaintStatusNode(DjangoObjectType):
    class Meta:
        model = ComplaintStatus
        interfaces = (AuthenticatedNode , )


class RoomFilter(django_filters.FilterSet):
    class Meta:
        model = Room
        fields = '__all__'


class RoomNode(DjangoObjectType):
    class Meta:
        model = Room
        interfaces = (AuthenticatedNode , )


class RelayQuery(graphene.ObjectType):
    all_hostels = ViewAllAuthenticatedQuery(HostelNode , filterset_class=HostelFilter)
    hostel = AuthenticatedNode.Field(HostelNode)
    all_complaints = ViewAllAuthenticatedQuery(ComplaintNode , filterset_class=ComplaintFilter)
    complaint = AuthenticatedNode.Field(ComplaintNode)
    all_messunits = ViewAllAuthenticatedQuery(MessUnitNode , filterset_class=MessUnitFilter)
    messunit = AuthenticatedNode.Field(MessUnitNode)
    all_messunitcomments = ViewAllAuthenticatedQuery(MessUnitCommentNode , filterset_class=MessUnitCommentFilter)
    messunitcomment = AuthenticatedNode.Field(MessUnitCommentNode)
    all_complainttypes = ViewAllAuthenticatedQuery(ComplaintTypesNode, filterset_class=ComplaintTypesFilter)
    complainttypes = AuthenticatedNode.Field(ComplaintTypesNode)
    all_complaintstatus = ViewAllAuthenticatedQuery(ComplaintStatusNode, filterset_class=ComplaintStatusFilter)
    complaintstatus = AuthenticatedNode.Field(ComplaintStatusNode)
    all_rooms = ViewAllAuthenticatedQuery(RoomNode , filterset_class=RoomFilter)
    room = AuthenticatedNode.Field(RoomNode)