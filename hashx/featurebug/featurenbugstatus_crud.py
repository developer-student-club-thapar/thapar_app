from .models import FeaturenBugStatus
from graphql_relay.node.node import from_global_id
from .schema import FeaturenBugStatusNode
import graphene
from graphene_django.types import DjangoObjectType
class CreateFeaturenBugStatus(graphene.relay.ClientIDMutation):
    featurenbugstatus = graphene.Field(FeaturenBugStatusNode)
    class Input:
        name = graphene.String()
        
    
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        name = input.get('name')
        
        featurenbugstatus = FeaturenBugStatus(name=name)
        featurenbugstatus.save()
        return  CreateFeaturenBugStatus(featurenbugstatus=featurenbugstatus)
class UpdateFeaturenBugStatus(graphene.relay.ClientIDMutation):
    featurenbugstatus = graphene.Field(FeaturenBugStatusNode)
    class Input:
        id = graphene.String()
        name = graphene.String()
        
        
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        name = input.get('name')
        featurenbugstatus = FeaturenBugStatus.objects.get(pk=id)
        if name:
            featurenbugstatus.name = name
        featurenbugstatus.save()
        return UpdateFeaturenBugStatus(featurenbugstatus=featurenbugstatus)