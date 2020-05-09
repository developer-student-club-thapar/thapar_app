import graphene
import django_filters
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
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
        interfaces = (graphene.relay.Node , )
    

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
        interfaces = (graphene.relay.Node , )
        
    
       

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
        interfaces = (graphene.relay.Node , )

class ShopItemReviewFilter(django_filters.FilterSet):
    class Meta:
        model = ShopItemReview
        fields = '__all__'
class ShopItemReviewNode(DjangoObjectType):
    class Meta:
        model = ShopItemReview
        interfaces = (graphene.relay.Node , )
class ShopReviewFilter(django_filters.FilterSet):
    class Meta:
        model = ShopReview
        fields = '__all__'
class ShopReviewNode(DjangoObjectType):
    class Meta:
        model = ShopReview
        interfaces = (graphene.relay.Node , )



class RelayQuery(graphene.ObjectType):
    all_shopitems =  DjangoFilterConnectionField(ShopItemNode , filterset_class=ShopItemFilter)
    shopitem = graphene.relay.Node.Field(ShopItemNode)
    all_shops =  DjangoFilterConnectionField(ShopNode , filterset_class=ShopFilter)
    shop = graphene.relay.Node.Field(ShopNode)
    all_shoptypes =  DjangoFilterConnectionField(ShopTypeNode , filterset_class=ShopTypeFilter)
    shoptype = graphene.relay.Node.Field(ShopTypeNode)
    all_shopitemreviews =  DjangoFilterConnectionField(ShopItemReviewNode , filterset_class=ShopItemReviewFilter)
    shopitemreview = graphene.relay.Node.Field(ShopItemReviewNode)
    all_shopreviews =  DjangoFilterConnectionField(ShopReviewNode , filterset_class=ShopReviewFilter)
    shopreview = graphene.relay.Node.Field(ShopReviewNode)
    node = node = graphene.relay.Node.Field()