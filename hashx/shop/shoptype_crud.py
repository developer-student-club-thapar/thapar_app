from .models import ShopType
from graphql_relay.node.node import from_global_id
from .schema import ShopTypeNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateShopType(graphene.relay.ClientIDMutation):
    shoptype = graphene.Field(ShopTypeNode)
    class Input:
        type = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        shoptype = ShopType(type=type)
        shoptype.save()
        return CreateShopType(shoptype=shoptype)
class UpdateShopType(graphene.relay.ClientIDMutation):
    shop = graphene.Field(ShopTypeNode)
    class Input:
        id = graphene.String()
        type = graphene.String()
        
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        shoptype = ShopType.objects.get(pk=id)
        if type:
            shoptype.type = type
        shoptype.save()
        return UpdateShopType(shoptype=shoptype)

        