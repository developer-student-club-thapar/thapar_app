import graphene
import django_filters
from .models import Student , Instructor
from django.db import models
from graphene_django.types import DjangoObjectType
from hashx.mixins import ViewAllAuthenticatedQuery , AuthenticatedNode , AuthenticatedNode
from django.contrib.auth import  get_user_model


class UserFilter(django_filters.FilterSet):
    class Meta:
        model = get_user_model()
        fields = '__all__'


class UserNode(DjangoObjectType):
    class Meta:
        model = get_user_model()
        interfaces = (AuthenticatedNode , )
        fields = ['username' , 'email' , 'first_name' , 'last_name']


class StudentFilter(django_filters.FilterSet):
    class Meta:
        model = Student
        fields = '__all__'
        filter_overrides = {
            models.ImageField :{
                'filter_class' : django_filters.CharFilter,
                'extra' : lambda f:{
                    'lookup_expr': 'icontains'
                }
            }
        }

class StudentNode(DjangoObjectType):
    class Meta:
        model = Student
        interfaces = (AuthenticatedNode , )
    
class InstructorFilter(django_filters.FilterSet):
    class Meta:
        model = Instructor
        fields = '__all__'
        filter_overrides = {
            models.ImageField :{
                'filter_class' : django_filters.CharFilter,
                'extra' : lambda f:{
                    'lookup_expr': 'icontains'
                }
            }
        }
class InstructorNode(DjangoObjectType):
    class Meta:
        model = Instructor
        interfaces = (AuthenticatedNode , )
    
class RelayQuery(graphene.ObjectType):
    all_instructor =  ViewAllAuthenticatedQuery(InstructorNode , filterset_class=InstructorFilter)
    instructor = AuthenticatedNode.Field(InstructorNode)
    all_student =  ViewAllAuthenticatedQuery(StudentNode , filterset_class=StudentFilter)
    student = AuthenticatedNode.Field(StudentNode)
    all_users = ViewAllAuthenticatedQuery(UserNode , filterset_class=UserFilter)
    user = AuthenticatedNode.Field(UserNode)
