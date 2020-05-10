import graphene
from graphql_relay import to_global_id
import django_filters
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from .models import FeaturenBug
from django.db import models

class FeaturenBugFilter(django_filters.FilterSet):
    class Meta:
        model = FeaturenBug
        fields = '__all__'
        filter_overrides = {
            models.ImageField :{
                'filter_class' : django_filters.CharFilter,
                'extra' : lambda f:{
                    'lookup_expr': 'icontains'
                }
            }
        }


class FeaturenBugNode(DjangoObjectType):
    class Meta:
        model = FeaturenBug
        interfaces = (graphene.relay.Node , )


class RelayQuery(graphene.ObjectType):
    all_featurenbugs = DjangoFilterConnectionField(FeaturenBugNode , filterset_class=FeaturenBugFilter)
    featurenbug = graphene.relay.Node.Field(FeaturenBugNode)