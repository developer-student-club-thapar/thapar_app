import graphene
from graphql_relay import to_global_id
import django_filters
from graphene_django import DjangoObjectType
from hashx.mixins import ViewAllAuthenticatedQuery , AuthenticatedNode
from .models import Item
from django.db import models


class ItemFilter(django_filters.FilterSet):
    class Meta:
        model = Item
        fields = '__all__'
        filter_overrides = {
            models.ImageField: {
                'filter_class': django_filters.CharFilter,
                'extra': lambda f: {
                    'lookup_expr': 'icontains'
                }
            }
        }


class ItemNode(DjangoObjectType):
    class Meta:
        model = Item
        interfaces = (AuthenticatedNode, )


class RelayQuery(graphene.ObjectType):
    all_items = ViewAllAuthenticatedQuery(ItemNode, filterset_class=ItemFilter)
    item = AuthenticatedNode.Field(ItemNode)