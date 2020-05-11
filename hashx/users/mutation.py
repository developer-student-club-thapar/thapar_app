import graphene
from .student_crud import CreateStudent , UpdateStudent
from .instructor_crud import CreateInstructor , UpdateInstructor
class Mutation(graphene.AbstractType):
    create_student = CreateStudent.Field() 
    update_student  = UpdateStudent.Field()
    create_instructor = CreateInstructor.Field() 
    update_instructor  = UpdateInstructor.Field()