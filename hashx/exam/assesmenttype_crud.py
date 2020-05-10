from .models import AssesmentType
from graphql_relay.node.node import from_global_id
from .schema import AssesmentTypeNode
import graphene
from graphene_django.types import DjangoObjectType
class CreateAssesmentType(graphene.relay.ClientIDMutation):
    assesmenttype = graphene.Field(AssesmentTypeNode)
    class Input:
        name = graphene.String()
    
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        name = input.get('name')
        assesmenttype = AssesmentType(name=name)
        assesmenttype.save()
        return  CreateAssesmentType(assesmenttype=assesmenttype)
class UpdateAssesmentType(graphene.relay.ClientIDMutation):
    assesmenttype = graphene.Field(AssesmentTypeNode)
    class Input:
        id = graphene.String()
        name = graphene.String()
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        name = input.get('name')
        assesmenttype = AssesmentType.objects.get(pk=id)
        if name:
            assesmenttype.name = name
        assesmenttype.save()
        return UpdateAssesmentType(assesmenttype=assesmenttype)