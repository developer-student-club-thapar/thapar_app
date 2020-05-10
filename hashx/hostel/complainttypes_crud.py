from .models import ComplaintTypes
from graphql_relay.node.node import from_global_id
from .schema import ComplaintTypesNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateComplaintTypes(graphene.relay.ClientIDMutation):
    complainttypes = graphene.Field(ComplaintTypesNode)

    class Input:
        name = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        name = input.get('name')
        complainttypes = ComplaintTypes(name=name)

        complainttypes.save()
        return CreateComplaintTypes(complainttypes=complainttypes)


class UpdateComplaintTypes(graphene.relay.ClientIDMutation):
    complainttypes = graphene.Field(ComplaintTypesNode)

    class Input:
        id = graphene.String()
        name = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        name = input.get('name')
        complainttypes = ComplaintTypes.objects.get(pk=id)

        if name:
            complainttypes.name = name

        complainttypes.save()
        return UpdateComplaintTypes(complainttypes=complainttypes)
