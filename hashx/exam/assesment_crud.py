import graphene
from .models import Assesment
from .schema import AssesmentNode
from graphql_relay.node.node import from_global_id
from graphene_django.types import DjangoObjectType
from hashx.decorators import every_authenticated , same_user , compare_users
class CreateAssesment(graphene.relay.ClientIDMutation):
    assesment = graphene.Field(AssesmentNode)
    class Input:
        type = graphene.String()
        batch = graphene.String()
        firstyearbatch = graphene.String()
    
    @classmethod
    @every_authenticated
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
    @compare_users(same_user , Assesment)
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