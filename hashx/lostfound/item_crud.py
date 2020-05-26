import graphene
from .models import Item , ItemCategory , ItemStatus
from .schema import ItemNode
from hashx.decorators import every_authenticated , same_user , compare_users
from graphql_relay.node.node import from_global_id
from graphene_django.types import DjangoObjectType


class CreateItem(graphene.relay.ClientIDMutation):
    item = graphene.Field(ItemNode)

    class Input:
        name = graphene.String()
        type = graphene.String()
        details = graphene.String()
        categoryId = graphene.String()
        statusId = graphene.String()
        contact_details = graphene.String()
        date_posted = graphene.String()
        is_reviewed = graphene.Boolean()
        published = graphene.Boolean()

    @classmethod
    @every_authenticated
    def mutate_and_get_payload(cls, root, info, **input):
        user = info.context.user
        name = input.get('name')
        type = input.get('type')
        details = input.get('details')
        categoryId = input.get('categoryId')
        category = ItemCategory.objects.get(pk=from_global_id(categoryId)[1])
        statusId = input.get('statusId')
        status = ItemStatus.objects.get(pk=from_global_id(statusId)[1])
        contact_details = input.get('contact_details')
        date_posted = input.get('date_posted')
        is_reviewed = input.get('is_reviewed')
        published = input.get('published')
        image = info.context.FILES
        item = Item(name=name, type=type, details=details, category=category, status=status, contact_details=contact_details, date_posted=date_posted, is_reviewed=is_reviewed, published=published, image=image , user=user)
        item.save()
        return CreateItem(item=item)


class UpdateItem(graphene.relay.ClientIDMutation):
    item = graphene.Field(ItemNode)

    class Input:
        id = graphene.String()
        name = graphene.String()
        type = graphene.String()
        details = graphene.String()
        categoryId = graphene.String()
        statusId = graphene.String()
        contact_details = graphene.String()
        date_posted = graphene.String()
        is_reviewed = graphene.String()
        published = graphene.String()

    @classmethod
    @every_authenticated
    @compare_users(same_user , Item)
    def mutate_and_get_payload(cls, root, info, **input):
        try:
            id = input.get('id')
            id = from_global_id(id)
            id = id[1]
            item = Item.objects.get(pk=id)
            user = item.user
            name = input.get('name')
            type = input.get('type')
            details = input.get('details')
            categoryId = input.get('categoryId')
            statusId = input.get('statusId')
            status = ItemStatus.objects.get(pk=from_global_id(statusId)[1])
            category = ItemCategory.objects.get(pk=from_global_id(categoryId)[1])
            contact_details = input.get('contact_details')
            date_posted = input.get('date_posted')
            is_reviewed = input.get('is_reviewed')
            published = input.get('published')
            image = info.context.FILES
            if name:
                item.name = name

            if type:
                item.type = type

            if details:
                item.details = details

            if category:
                item.category = category

            if status:
                item.status = status

            if contact_details:
                item.contact_details = contact_details

            if date_posted:
                item.date_posted = date_posted

            if is_reviewed:
                item.is_reviewed = is_reviewed

            if published:
                item.published = published

            if image:
                item.image = image

            item.save()
            return UpdateItem(item=item)
        except:
            raise Exception("Item Not Found")
