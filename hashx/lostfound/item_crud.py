from .models import Item
from graphql_relay.node.node import from_global_id
from .schema import ItemNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateItem(graphene.relay.ClientIDMutation):
    item = graphene.Field(ItemNode)

    class Input:
        name = graphene.String()
        type = graphene.String()
        details = graphene.String()
        category = graphene.String()
        status = graphene.String()
        contact_details = graphene.String()
        date_posted = graphene.String()
        is_reviewed = graphene.Boolean()
        published = graphene.Boolean()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        name = input.get('name')
        type = input.get('type')
        details = input.get('details')
        category = input.get('category')
        status = input.get('status')
        contact_details = input.get('contact_details')
        date_posted = input.get('date_posted')
        is_reviewed = input.get('is_reviewed')
        published = input.get('published')
        item = Item(name=name, type=type, details=details, category=category, status=status, contact_details=contact_details, date_posted=date_posted, is_reviewed=is_reviewed, published=published)

        item.save()
        return CreateItem(item=item)


class UpdateItem(graphene.relay.ClientIDMutation):
    item = graphene.Field(ItemNode)

    class Input:
        id = graphene.String()
        name = graphene.String()
        type = graphene.String()
        details = graphene.String()
        category = graphene.String()
        status = graphene.String()
        contact_details = graphene.String()
        date_posted = graphene.String()
        is_reviewed = graphene.String()
        published = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        name = input.get('name')
        type = input.get('type')
        details = input.get('details')
        category = input.get('category')
        status = input.get('status')
        contact_details = input.get('contact_details')
        date_posted = input.get('date_posted')
        is_reviewed = input.get('is_reviewed')
        published = input.get('published')
        item = Item.objects.get(pk=id)

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

        item.save()
        return UpdateItem(item=item)
