import graphene
from .featurenbug_crud import UpdateFeaturenBug, CreateFeaturenBug


class Mutation(graphene.AbstractType):
    create_featurenbug = CreateFeaturenBug.Field()
    update_featurenbug = UpdateFeaturenBug.Field()