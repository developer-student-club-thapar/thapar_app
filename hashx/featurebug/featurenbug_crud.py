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

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        type = input.get('type')
        category = input.get('category')
        status = input.get('status')
        title = input.get('title')
        text = input.get('text')
        user = input.get('user')
        featurenbug = FeaturenBug(status=status, type=type, category=category, title=title, text=text, user=user)

        featurenbug.save()
        return CreateFeaturenBug(featurenbug=featurenbug)


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

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        type = input.get('type')
        category = input.get('category')
        status = input.get('status')
        title = input.get('title')
        text = input.get('text')
        user = input.get('user')
        featurenbug = FeaturenBug.objects.get(pk=id)

        if type:
            featurenbug.type = type

        if category:
            featurenbug.category = category

        if status:
            featurenbug.status = status

        if title:
            featurenbug.title = title

        if text:
            featurenbug.text = text

        if user:
            featurenbug.user = user

        featurenbug.save()
        return UpdateFeaturenBug(featurenbug=featurenbug)
