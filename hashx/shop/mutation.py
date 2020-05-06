import graphene
from .shoptype_crud import CreateShopType , UpdateShopType
from .shop_crud import CreateShop , UpdateShop
from .shopitem_crud import CreateShopItem , UpdateShopItem
class Mutation(graphene.AbstractType):
    create_shop = CreateShop.Field()
    update_shop = UpdateShop.Field()
    create_shoptype = CreateShopType.Field()
    update_shoptype = UpdateShopType.Field()
    create_shopitem = CreateShopItem.Field()
    update_shopitem = UpdateShopItem.Field()