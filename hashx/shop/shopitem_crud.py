from .models import ShopItem
from graphql_relay.node.node import from_global_id
from .schema import ShopItemNode
import graphene
from graphene_django.types import DjangoObjectType
class CreateShopItem(graphene.relay.ClientIDMutation):
    shopitem = graphene.Field(ShopItemNode)
    class Input:
        shop = graphene.String()
        name = graphene.String()
        price = graphene.Int()
        stars = graphene.Float()
    
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        
        shop = input.get('shop')
        name = input.get('name')
        price = input.get('price')
        stars = input.get('stars')
        shopitem = ShopItem(shop=shop , name=name , price=price , stars=stars)
        shopitem.save()
        return  CreateShopItem(shopitem=shopitem)

class UpdateShopItem(graphene.relay.ClientIDMutation):
    shopitem = graphene.Field(ShopItemNode)
    class Input:
        id = graphene.String()
        shop = graphene.String()
        name = graphene.String()
        price = graphene.Int()
        stars = graphene.Float()
        
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        shop = input.get('shop')
        name = input.get('name')
        price = input.get('price')
        stars = input.get('stars')
        shopitem = ShopItem.objects.get(pk=id)
        if shop:
            shopitem.shop = shop
        if name:
            shopitem.name = name
        if price:
            shopitem.price = price
        if stars:
            shopitem.stars = stars
        shopitem.save()
        return UpdateShopItem(shopitem=shopitem)
        