import graphene
from graphql_relay import to_global_id
import django_filters
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
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
        interfaces = (graphene.relay.Node, )


class RelayQuery(graphene.ObjectType):
    all_items = DjangoFilterConnectionField(ItemNode, filterset_class=ItemFilter)
    item = graphene.relay.Node.Field(ItemNode)