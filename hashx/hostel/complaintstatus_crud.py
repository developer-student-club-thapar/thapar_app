from .models import ComplaintStatus
from graphql_relay.node.node import from_global_id
from .schema import ComplaintStatusNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateComplaintStatus(graphene.relay.ClientIDMutation):
    complaintstatus = graphene.Field(ComplaintStatusNode)

    class Input:
        name = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        name = input.get('name')
        complaintstatus = ComplaintStatus(name=name)

        complaintstatus.save()
        return CreateComplaintStatus(complaintstatus=complaintstatus)


class UpdateComplaintStatus(graphene.relay.ClientIDMutation):
    complaintstatus = graphene.Field(ComplaintStatusNode)

    class Input:
        id = graphene.String()
        name = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        name = input.get('name')
        complaintstatus = ComplaintStatus.objects.get(pk=id)

        if name:
            complaintstatus.name = name

        complaintstatus.save()
        return UpdateComplaintStatus(complaintstatus=complaintstatus)
