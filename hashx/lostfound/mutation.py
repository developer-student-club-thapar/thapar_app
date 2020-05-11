import graphene
from .item_crud import UpdateItem, CreateItem

class Mutation(graphene.AbstractType):
    create_item = CreateItem.Field()
    update_item = UpdateItem.Field()