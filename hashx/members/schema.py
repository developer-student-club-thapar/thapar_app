import graphene
from graphql_relay import to_global_id
import django_filters
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from .models import Member, VolunteershipApplication , Contributors
from django.db import models
from hashx.mixins import ViewAllAuthenticatedQuery , AuthenticatedNode


class ContributorsFilter(django_filters.FilterSet):
    class Meta:
        model = Contributors
        fields = '__all__'
        filter_overrides = {
            models.ImageField :{
                'filter_class' : django_filters.CharFilter,
                'extra' : lambda f:{
                    'lookup_expr': 'icontains'
                }
            }
        }
class ContributorsNode(DjangoObjectType):
    class Meta:
        model = Contributors
        interfaces = (graphene.relay.Node , )
    


class MemberFilter(django_filters.FilterSet):
    class Meta:
        model = Member
        fields = '__all__'
        filter_overrides = {
            models.ImageField :{
                'filter_class' : django_filters.CharFilter,
                'extra' : lambda f:{
                    'lookup_expr': 'icontains'
                }
            }
        }


class MemberNode(DjangoObjectType):
    class Meta:
        model = Member
        interfaces = (AuthenticatedNode , )


class VolunteershipApplicationFilter(django_filters.FilterSet):
    class Meta:
        model = VolunteershipApplication
        fields = '__all__'


class VolunteershipApplicationNode(DjangoObjectType):
    class Meta:
        model = VolunteershipApplication
        interfaces = (AuthenticatedNode , )


class RelayQuery(graphene.ObjectType):
    all_members = DjangoFilterConnectionField(MemberNode, filterset_class=MemberFilter)
    member = AuthenticatedNode.Field(MemberNode)
    all_volunteershipapplications = DjangoFilterConnectionField(VolunteershipApplicationNode, filterset_class=VolunteershipApplicationFilter)
    volunteershipapplication = AuthenticatedNode.Field(VolunteershipApplicationNode)
    all_contributors =  DjangoFilterConnectionField(ContributorsNode , filterset_class=ContributorsFilter)
    contributors = graphene.relay.Node.Field(ContributorsNode)