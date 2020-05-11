from .models import Student
from graphql_relay.node.node import from_global_id
from .schema import StudentNode
import graphene
from graphene_django.types import DjangoObjectType
class CreateStudent(graphene.relay.ClientIDMutation):
    student = graphene.Field(StudentNode)
    class Input:
        user = graphene.String()
        bio = graphene.String()
        branch = graphene.String()
        batch = graphene.String()
        firstyearbatch = graphene.String()
        points = graphene.String()
        gender = graphene.String()
        #starred files
    
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        student = Student()
        user = input.get('user')
        bio = input.get('bio')
        branch = input.get('branch')
        batch = input.get('batch')
        firstyearbatch = input.get('firstyearbatch')
        points = input.get('points')
        gender = input.get('gender')
        image = info.context.FILES['image'] 
        student.save(user=user , bio = bio , branch=branch ,batch = batch , firstyearbatch = firstyearbatch  , points =points , gender = gender)
        if image:
            student.image = image
        student.save()
        return  CreateStudent(student=student)
class UpdateStudent(graphene.relay.ClientIDMutation):
    student = graphene.Field(StudentNode)
    class Input:
        id = graphene.String()
        user = graphene.String()
        bio = graphene.String()
        branch = graphene.String()
        batch = graphene.String()
        firstyearbatch = graphene.String()
        points = graphene.String()
        gender = graphene.String()
        
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        student = Student()
        user = input.get('user')
        bio = input.get('bio')
        branch = input.get('branch')
        batch = input.get('batch')
        firstyearbatch = input.get('firstyearbatch')
        points = input.get('points')
        gender = input.get('gender')
        image = info.context.FILES['image'] 
        student = Student.objects.get(pk=id)
        if user:
            student.user = user
        if bio:
            student.bio = bio
        if branch:
            student.branch = branch
        if batch:
            student.batch = batch
        if firstyearbatch:
            student.firstyearbatch = firstyearbatch
        if points:
            student.points = points
        if gender:
            student.gender = gender
        if image:
            student.image = image
        student.save()
        return UpdateStudent(student=student)