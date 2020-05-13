from .models import FirstYearBatch
from graphql_relay.node.node import from_global_id
from .schema import FirstYearBatchNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateFirstYearBatch(graphene.relay.ClientIDMutation):
    firstyearbatch = graphene.Field(FirstYearBatchNode)

    class Input:
        code = graphene.String()
        no = graphene.Int()
        gr = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        code = input.get('code')
        no = input.get('no')
        gr = input.get('gr')
        firstyearbatch = FirstYearBatch(code=code, no=no, gr=gr)

        firstyearbatch.save()
        return CreateFirstYearBatch(firstyearbatch=firstyearbatch)


class UpdateFirstYearBatch(graphene.relay.ClientIDMutation):
    firstyearbatch = graphene.Field(FirstYearBatchNode)

    class Input:
        id = graphene.String()
        code = graphene.String()
        no = graphene.Int()
        gr = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        code = input.get('code')
        no = input.get('no')
        gr = input.get('gr')
        firstyearbatch = FirstYearBatch.objects.get(pk=id)

        if code:
            firstyearbatch.code = code

        if no:
            firstyearbatch.no = no

        if gr:
            firstyearbatch.gr = gr

        firstyearbatch.save()
        return UpdateFirstYearBatch(firstyearbatch=firstyearbatch)
