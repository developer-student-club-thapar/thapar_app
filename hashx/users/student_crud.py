from .models import Student
from hashx.mixins import AuthenticatedNode
from graphql_relay.node.node import from_global_id
from .schema import StudentNode
import graphene
from acad.models import Branch, Batch, Course
from django.contrib.auth.models import User
from graphene_django.types import DjangoObjectType
from hashx.decorators import every_authenticated,  same_user, compare_users, file_size_check


class CreateStudent(graphene.relay.ClientIDMutation):
    student = graphene.Field(StudentNode)

    class Input:
        branch = graphene.String()
        batch = graphene.String()
        gender = graphene.String()
        rollno = graphene.Int()
        invited_code = graphene.String()
        bio = graphene.String()

        # starred files

    @classmethod
    @every_authenticated
    def mutate_and_get_payload(cls, root, info, **input):
        user = info.context.user
        gender = input.get('gender')
        invited_code = input.get('invited_code')
        bio = input.get('bio')
        branch = input.get('branch')
        batch = input.get('batch')
        rollno = input.get('rollno')
        branchId = from_global_id(branch)[1]
        batchId = from_global_id(batch)[1]
        branchObject = Branch.objects.get(pk=branchId)
        batchObject = Batch.objects.get(pk=batchId)
        student = Student.objects.create(user=user, branch=branchObject, batch=batchObject,
                                         gender=gender, bio=bio, rollno=rollno, invited_code=invited_code)
        student.save()
        return CreateStudent(student=student)


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
    @every_authenticated
    @compare_users(same_user, Student)
    @file_size_check('image', 10485760)
    def mutate_and_get_payload(cls, root, info, **input):
        try:
            id = input.get('id')
            id = AuthenticatedNode.from_global_id(id)
            id = id[1]
            student = Student.objects.get(pk=id)
            user = input.get('user')
            bio = input.get('bio')
            branch = input.get('branch')
            batch = input.get('batch')
            firstyearbatch = input.get('firstyearbatch')
            points = input.get('points')
            gender = input.get('gender')
            try:
                image = info.context.FILES['image']
            except:
                pass
            student = Student.objects.get(pk=id)
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
        except:
            raise Exception('User Not Found')


class SubscribeToCourse(graphene.relay.ClientIDMutation):
    success = graphene.Boolean()

    class Input:
        courses = graphene.List(graphene.String)

    @classmethod
    @every_authenticated
    def mutate_and_get_payload(cls, root, info, courses):
        user = info.context.user
        student = user.student

        for course in courses:
            try:
                courseID = from_global_id(course)[1]
                c = Course.objects.get(pk=courseID)
                student.subscribed_courses.add(c)
            except:
                raise Exception('Course ID invalid')

        return SubscribeToCourse(success=True)
