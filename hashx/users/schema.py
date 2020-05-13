import graphene
import django_filters
from .models import Student , Instructor
from django.db import models
from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from django.contrib.auth.models import User

class UserFilter(django_filters.FilterSet):
    class Meta:
        model = User
        fields = '__all__'


class UserNode(DjangoObjectType):
    class Meta:
        model = User
        interfaces = (graphene.relay.Node , )


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
        interfaces = (graphene.relay.Node , )
    
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
        interfaces = (graphene.relay.Node , )
    
class RelayQuery(graphene.ObjectType):
    node = graphene.relay.Node.Field()
    all_instructor =  DjangoFilterConnectionField(InstructorNode , filterset_class=InstructorFilter)
    instructor = graphene.relay.Node.Field(InstructorNode)
    all_student =  DjangoFilterConnectionField(StudentNode , filterset_class=StudentFilter)
    student = graphene.relay.Node.Field(StudentNode)
    all_users = DjangoFilterConnectionField(UserNode , filterset_class=UserFilter)
    user = graphene.relay.Node.Field(UserNode)
