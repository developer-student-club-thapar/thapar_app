import graphene
import django_filters
from graphene_django import DjangoObjectType
from hashx.mixins import ViewAllAuthenticatedQuery , AuthenticatedNode
from .models import Shop , ShopItem , ShopType,ShopItemReview,ShopReview
from django.db import models


class ShopTypeFilter(django_filters.FilterSet):
    class Meta:
        model = ShopType
        fields = '__all__'
        filter_overrides = {
            models.ImageField :{
                'filter_class' : django_filters.CharFilter,
                'extra' : lambda f:{
                    'lookup_expr': 'icontains'
                }
            }
        }
class ShopTypeNode(DjangoObjectType):
    class Meta:
        model = ShopType
        interfaces = (AuthenticatedNode , )
    

class ShopFilter(django_filters.FilterSet):
    class Meta:
        model = Shop
        fields = '__all__'
        filter_overrides = {
            models.ImageField :{
                'filter_class' : django_filters.CharFilter,
                'extra' : lambda f:{
                    'lookup_expr': 'icontains'
                }
            }
        }
class ShopNode(DjangoObjectType):
    class Meta:
        model = Shop
        interfaces = (AuthenticatedNode , )
    
       

class ShopItemFilter(django_filters.FilterSet):
    class Meta:
        model = ShopItem
        fields = '__all__'
        filter_overrides = {
        models.ImageField :{
            'filter_class' : django_filters.CharFilter,
            'extra' : lambda f:{
                'lookup_expr': 'icontains'
            }
        }}
class ShopItemNode(DjangoObjectType):
    class Meta:
        model = ShopItem
        interfaces = (AuthenticatedNode , )

class ShopItemReviewFilter(django_filters.FilterSet):
    class Meta:
        model = ShopItemReview
        fields = '__all__'
class ShopItemReviewNode(DjangoObjectType):
    class Meta:
        model = ShopItemReview
        interfaces = (AuthenticatedNode , )
class ShopReviewFilter(django_filters.FilterSet):
    class Meta:
        model = ShopReview
        fields = '__all__'
class ShopReviewNode(DjangoObjectType):
    class Meta:
        model = ShopReview
        interfaces = (AuthenticatedNode , )


class RelayQuery(graphene.ObjectType):
    all_shopitems =  ViewAllAuthenticatedQuery(ShopItemNode , filterset_class=ShopItemFilter)
    shopitem = AuthenticatedNode.Field(ShopItemNode)
    all_shops =  ViewAllAuthenticatedQuery(ShopNode , filterset_class=ShopFilter)
    shop = AuthenticatedNode.Field(ShopNode)
    all_shoptypes =  ViewAllAuthenticatedQuery(ShopTypeNode , filterset_class=ShopTypeFilter)
    shoptype = AuthenticatedNode.Field(ShopTypeNode)
    all_shopitemreviews =  ViewAllAuthenticatedQuery(ShopItemReviewNode , filterset_class=ShopItemReviewFilter)
    shopitemreview = AuthenticatedNode.Field(ShopItemReviewNode)
    all_shopreviews =  ViewAllAuthenticatedQuery(ShopReviewNode , filterset_class=ShopReviewFilter)
    shopreview = AuthenticatedNode.Field(ShopReviewNode)
    node = AuthenticatedNode.Field()