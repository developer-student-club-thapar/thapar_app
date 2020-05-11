from .models import FeaturenBug
from graphql_relay.node.node import from_global_id
from .schema import FeaturenBugNode
import graphene
from graphene_django.types import DjangoObjectType
class CreateFeaturenBug(graphene.relay.ClientIDMutation):
    featurenbug = graphene.Field(FeaturenBugNode)
    class Input:
        type = graphene.String()
        category = graphene.String()
        status = graphene.String()
        title = graphene.String()
        text = graphene.String()
        user = graphene.String()
        image = graphene.String()
        date_posted  = graphene.types.datetime.DateTime()
        slug = graphene.String()
    
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        featurenbug = FeaturenBug()
        type = input.get('type')
        category = input.get('category')
        status = input.get('status')
        title = input.get('title')
        text = input.get('text')
        user = input.get('user')
        date_posted = input.get('date_posted')
        slug = input.get('slug')
        featurenbug.save(type = type ,category = category , status=status , title = title , text = text , user = user , date_posted=date_posted , slug = slug)
        return  CreateFeaturenBug(featurenbug=featurenbug)
class UpdateFeaturenBug(graphene.relay.ClientIDMutation):
    featurenbug = graphene.Field(FeaturenBugNode)
    class Input:
        id = graphene.String()
        type = graphene.String()
        category = graphene.String()
        status = graphene.String()
        title = graphene.String()
        text = graphene.String()
        user = graphene.String()
        image = graphene.String()
        date_posted  = graphene.types.datetime.DateTime()
        slug = graphene.String()
        
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        featurenbug = FeaturenBug()
        type = input.get('type')
        category = input.get('category')
        status = input.get('status')
        title = input.get('title')
        text = input.get('text')
        user = input.get('user')
        date_posted = input.get('date_posted')
        slug = input.get('slug')
        featurenbug = FeaturenBug.objects.get(pk=id)
        if type:
            featurenbug.type = type
        if title:
            featurenbug.title = title
        if text:
            featurenbug.text = text
        if status:
            featurenbug.status = status
        if category:
            featurenbug.category = category
        if user:
            featurenbug.user = user
        if date_posted:
            featurenbug.date_posted = date_posted
        if slug:
            featurenbug.slug = slug
        featurenbug.save()
        return UpdateFeaturenBug(featurenbug=featurenbug)