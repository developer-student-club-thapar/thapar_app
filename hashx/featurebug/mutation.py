import graphene
from .featurenbug_crud import CreateFeaturenBug , UpdateFeaturenBug
from .featurenbugcategory_crud import CreateFeaturenBugCategory , UpdateFeaturenBugCategory
from .featurenbugstatus_crud import CreateFeaturenBugStatus , UpdateFeaturenBugStatus
class Mutation(graphene.AbstractType):
    create_featurenbug = CreateFeaturenBug.Field()
    update_featurenbug = UpdateFeaturenBug.Field()
    create_featurenbugcategory = CreateFeaturenBugCategory.Field()
    update_featurenbugcategory = UpdateFeaturenBugCategory.Field()
    create_featurenbugstatus = CreateFeaturenBugStatus.Field()
    update_featurenbugstatus = UpdateFeaturenBugStatus.Field()
    


