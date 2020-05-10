import graphene
from graphql_relay import to_global_id
import django_filters
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from .models import Hostel, Complaint, MessUnit, MessUnitComment, ComplaintStatus, ComplaintTypes
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
        interfaces = (graphene.relay.Node , )


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
            }
        }


class ComplaintNode(DjangoObjectType):
    class Meta:
        model = Complaint
        interfaces = (graphene.relay.Node , )


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
            }
        }


class MessUnitNode(DjangoObjectType):
    class Meta:
        model = MessUnit
        interfaces = (graphene.relay.Node , )


class MessUnitCommentFilter(django_filters.FilterSet):
    class Meta:
        model = MessUnitComment
        fields = '__all__'


class MessUnitCommentNode(DjangoObjectType):
    class Meta:
        model = MessUnitComment
        interfaces = (graphene.relay.Node , )


class ComplaintTypesFilter(django_filters.FilterSet):
    class Meta:
        model = ComplaintTypes
        fields = '__all__'


class ComplaintTypesNode(DjangoObjectType):
    class Meta:
        model = ComplaintTypes
        interfaces = (graphene.relay.Node , )


class ComplaintStatusFilter(django_filters.FilterSet):
    class Meta:
        model = ComplaintStatus
        fields = '__all__'


class ComplaintStatusNode(DjangoObjectType):
    class Meta:
        model = ComplaintStatus
        interfaces = (graphene.relay.Node , )


class RelayQuery(graphene.ObjectType):
    all_hostels = DjangoFilterConnectionField(HostelNode , filterset_class=HostelFilter)
    hostel = graphene.relay.Node.Field(HostelNode)
    all_complaints = DjangoFilterConnectionField(ComplaintNode , filterset_class=ComplaintFilter)
    complaint = graphene.relay.Node.Field(ComplaintNode)
    all_messunits = DjangoFilterConnectionField(MessUnitNode , filterset_class=MessUnitFilter)
    messunit = graphene.relay.Node.Field(MessUnitNode)
    all_messunitcomments = DjangoFilterConnectionField(MessUnitCommentNode , filterset_class=MessUnitCommentFilter)
    messunitcomment = graphene.relay.Node.Field(MessUnitCommentNode)
    all_complainttypes = DjangoFilterConnectionField(ComplaintTypesNode, filterset_class=ComplaintTypesFilter)
    complainttypes = graphene.relay.Node.Field(ComplaintTypesNode)
    all_complaintstatus = DjangoFilterConnectionField(ComplaintStatusNode, filterset_class=ComplaintStatusFilter)
    complaintstatus = graphene.relay.Node.Field(ComplaintStatusNode)