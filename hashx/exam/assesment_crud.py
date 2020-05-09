from .models import Assesment
from graphql_relay.node.node import from_global_id
from .schema import AssesmentNode
import graphene
from graphene_django.types import DjangoObjectType
class CreateAssesment(graphene.relay.ClientIDMutation):
    assesment = graphene.Field(AssesmentNode)
    class Input:
        type = graphene.String()
        batch = graphene.String()
        firstyearbatch = graphene.String()
    
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        type = input.get('type')
        batch = input.get('batch')
        firstyearbatch = input.get('firstyearbatch')
        assesment = Assesment(type = type , batch =batch , firstyearbatch=firstyearbatch)
        assesment.save()
        return  CreateAssesment(assesment=assesment)
class UpdateAssesment(graphene.relay.ClientIDMutation):
    assesment = graphene.Field(AssesmentNode)
    class Input:
        id = graphene.String()
        batch = graphene.String()
        firstyearbatch = graphene.String()
        
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        type = input.get('type')
        batch = input.get('batch')
        firstyearbatch = input.get('firstyearbatch')
        assesment = Assesment.objects.get(pk=id)
        if type:
            assesment.type = type
        if batch:
            assesment.batch = batch
        if firstyearbatch:
            assesment.firstyearbatch = firstyearbatch
        assesment.save()
        return UpdateAssesment(assesment=assesment)