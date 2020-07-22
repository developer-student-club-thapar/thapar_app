import graphene
from .models import FeaturenBug , FeaturenBugCategory , FeaturenBugStatus
from .schema import FeaturenBugNode
from hashx.decorators import every_authenticated , same_user , compare_users
from graphql_relay.node.node import from_global_id
from graphene_django.types import DjangoObjectType
class CreateFeaturenBug(graphene.relay.ClientIDMutation):
    featurenbug = graphene.Field(FeaturenBugNode)
    class Input:
        type = graphene.String()
        categoryId = graphene.String()
        statusId = graphene.String()
        title = graphene.String()
        text = graphene.String()
        image = graphene.String()
        date_posted  = graphene.types.datetime.DateTime()
        slug = graphene.String()
    
    @classmethod
    @every_authenticated
    def mutate_and_get_payload(cls,root, info, **input):
        featurenbug = FeaturenBug()
        type = input.get('type')
        categoryId = input.get('categoryId')
        statusId = input.get('statusId')
        category = FeaturenBugCategory.objects.get(pk=from_global_id(categoryId)[1])
        status = FeaturenBugStatus.objects.get(pk=from_global_id(statusId)[1])
        title = input.get('title')
        text = input.get('text')
        date_posted = input.get('date_posted')
        slug = input.get('slug')
        image = info.context.FILES['image']
        user = info.context.user
        featurenbug = FeaturenBug(type = type ,category = category ,status=status , title = title , text = text , user = user , date_posted=date_posted , slug = slug)
        featurenbug.save()
        if image:
            featurenbug.image = image
        featurenbug.save()
        return  CreateFeaturenBug(featurenbug=featurenbug)
class UpdateFeaturenBug(graphene.relay.ClientIDMutation):
    featurenbug = graphene.Field(FeaturenBugNode)
    class Input:
        id = graphene.String()
        type = graphene.String()
        categoryId = graphene.String()
        statusId = graphene.String()
        title = graphene.String()
        text = graphene.String()
        user = graphene.String()
        image = graphene.String()
        date_posted  = graphene.types.datetime.DateTime()
        slug = graphene.String()
        
    @classmethod
    @every_authenticated
    @compare_users(same_user , FeaturenBug)
    def mutate_and_get_payload(cls,root, info, **input):
        try:
            id = input.get('id')
            id = from_global_id(id)
            id = id[1]
            featurenbug = FeaturenBug.objects.get(pk=id)
            type = input.get('type')
            categoryId = input.get('categoryId')
            statusId = input.get('statusId')
            category = FeaturenBugCategory.objects.get(pk=from_global_id(categoryId)[1])
            status = FeaturenBugStatus.objects.get(pk=from_global_id(statusId)[1])
            title = input.get('title')
            text = input.get('text')
            date_posted = input.get('date_posted')
            slug = input.get('slug')
            image = info.context.FILES['image'] 
            user = featurenbug.user
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
            if date_posted:
                featurenbug.date_posted = date_posted
            if slug:
                featurenbug.slug = slug
            if image:
                featurenbug.image = image
            featurenbug.save()
            return UpdateFeaturenBug(featurenbug=featurenbug)
        except:
            raise Exception('Item Not Found')