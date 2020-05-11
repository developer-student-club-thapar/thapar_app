from .models import Batch
from graphql_relay.node.node import from_global_id
from .schema import BatchNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateBatch(graphene.relay.ClientIDMutation):
    batch = graphene.Field(BatchNode)

    class Input:
        branch = graphene.String()
        num = graphene.Int()
        GR = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        branch = input.get('branch')
        num = input.get('num')
        GR = input.get('GR')
        batch = Batch(branch=branch, num=num, GR=GR)

        batch.save()
        return CreateBatch(batch=batch)


class UpdateBatch(graphene.relay.ClientIDMutation):
    batch = graphene.Field(BatchNode)

    class Input:
        id = graphene.String()
        branch = graphene.String()
        num = graphene.Int()
        GR = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        branch = input.get('branch')
        num = input.get('num')
        GR = input.get('GR')
        batch = Batch.objects.get(pk=id)

        if branch:
            batch.branch = branch

        if num:
            batch.num = num

        if GR:
            batch.GR = GR

        batch.save()
        return UpdateBatch(batch=batch)
