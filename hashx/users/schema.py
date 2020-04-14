import graphene
from graphene_django.types import DjangoObjectType
from .models import Student


class StudentType(DjangoObjectType):

    class Meta:
        model = Student


class Query(object):
    # Student
    student = graphene.Field(
        StudentType,
        id=graphene.UUID(),
        username=graphene.String(),
        first_name=graphene.String(),
        last_name=graphene.String(),
        email=graphene.String(),
        password=graphene.String(),
    )

    all_student = graphene.List(StudentType)
