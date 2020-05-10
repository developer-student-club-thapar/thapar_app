import graphene
from .exambase_crud import CreateExamBase , UpdateExamBase
from .examination_crud import CreateExamination , UpdateExamination
from .assesment_crud import CreateAssesment  , UpdateAssesment
from .assesmenttype_crud import CreateAssesmentType , UpdateAssesmentType


class Mutation(graphene.AbstractType):
    create_exambase = CreateExamBase.Field()
    update_exambase = UpdateExamBase.Field()
    create_examination = CreateExamination.Field()
    update_examination = UpdateExamination.Field()
    create_assesment = CreateAssesment.Field()
    update_assesment = UpdateAssesment.Field()
    create_assesmenttype = CreateAssesmentType.Field()
    update_assesmenttype = UpdateAssesmentType.Field()