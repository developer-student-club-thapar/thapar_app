from .models import Instructor
from graphql_relay.node.node import from_global_id
from .schema import InstructorNode
import graphene
from graphene_django.types import DjangoObjectType
class CreateInstructor(graphene.relay.ClientIDMutation):
    instructor = graphene.Field(InstructorNode)
    class Input:
        name = graphene.String()
        user = graphene.String()
        course_codinator = graphene.Boolean()
        email = graphene.String()
        course = graphene.String()
        office = graphene.String()
        created_date = graphene.types.datetime.DateTime()
    
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        name = input.get('name')
        user = input.get('user')
        course_codinator = input.get('course_codinator')
        email = input.get('email')
        office = input.get('office')
        course = input.get('course')
        created_date = input.get('created_date')
        instructor = Instructor(name = name , user= user , course_codinator = course_codinator , email = email , office = office , course = course , created_date = created_date)
        instructor.save()
        return  CreateInstructor(instructor=instructor)
class UpdateInstructor(graphene.relay.ClientIDMutation):
    instructor = graphene.Field(InstructorNode)
    class Input:
        id = graphene.String()
        name = graphene.String()
        user = graphene.String()
        course_codinator = graphene.Boolean()
        email = graphene.String()
        course = graphene.String()
        office = graphene.String()
        created_date = graphene.types.datetime.DateTime()
        
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        name = input.get('name')
        user = input.get('user')
        course_codinator = input.get('course_codinator')
        email = input.get('email')
        office = input.get('office')
        course = input.get('course')
        created_date = input.get('created_date')
        instructor = Instructor.objects.get(pk=id)
        if name:
            instructor.name = name
        if user:
            instructor.user = user
        if course_codinator:
            instructor.course_codinator = course_codinator
        if email:
            instructor.email = email
        if office:
            instructor.office = office
        if course:
            instructor.course = course
        instructor.save()
        return UpdateInstructor(instructor=instructor)