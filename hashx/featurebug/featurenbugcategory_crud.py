from .models import FeaturenBugCategory
from graphql_relay.node.node import from_global_id
from .schema import FeaturenBugCategoryNode
import graphene
from graphene_django.types import DjangoObjectType
class CreateFeaturenBugCategory(graphene.relay.ClientIDMutation):
    featurenbugcategory = graphene.Field(FeaturenBugCategoryNode)
    class Input:
        name = graphene.String()
    
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        name = input.get('name')
        featurenbugcategory = FeaturenBugCategory(name = name)
        featurenbugcategory.save()
        return  CreateFeaturenBugCategory(featurenbugcategory=featurenbugcategory)
class UpdateFeaturenBugCategory(graphene.relay.ClientIDMutation):
    featurenbugcategory = graphene.Field(FeaturenBugCategoryNode)
    class Input:
        id = graphene.String()
        name = graphene.String()
        
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        name = input.get('name')
        featurenbugcategory = FeaturenBugCategory.objects.get(pk=id)
        if name:
            featurenbugcategory.name = name
        featurenbugcategory.save()
        return UpdateFeaturenBugCategory(featurenbugcategory=featurenbugcategory)