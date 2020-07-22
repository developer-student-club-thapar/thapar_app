import graphene
import django_filters
from graphene_django import DjangoObjectType
from hashx.mixins import ViewAllAuthenticatedQuery , AuthenticatedNode , AuthenticatedNode
from .models import ExamBase , Examination , Assesment , AssesmentType

class ExamBaseFilter(django_filters.FilterSet):
    class Meta:
        model = ExamBase
        fields = '__all__'

class ExamBaseNode(DjangoObjectType):
    class Meta:
        model = ExamBase
        interfaces = (AuthenticatedNode , )
    
class ExaminationFilter(django_filters.FilterSet):
    class Meta:
        model = Examination
        fields = '__all__'
class ExaminationNode(DjangoObjectType):
    class Meta:
        model = Examination
        interfaces = (AuthenticatedNode , )
    
class AssesmentFilter(django_filters.FilterSet):
    class Meta:
        model = Assesment
        fields = '__all__'
class AssesmentNode(DjangoObjectType):
    class Meta:
        model = Assesment
        interfaces = (AuthenticatedNode , )
class AssesmentTypeFilter(django_filters.FilterSet):
    class Meta:
        model = AssesmentType
        fields = '__all__'
class AssesmentTypeNode(DjangoObjectType):
    class Meta:
        model = AssesmentType
        interfaces = (AuthenticatedNode , )
    
class RelayQuery(graphene.ObjectType):
    all_exambase =  ViewAllAuthenticatedQuery(ExamBaseNode , filterset_class=ExamBaseFilter)
    exambase = AuthenticatedNode.Field(ExamBaseNode)
    all_examination =  ViewAllAuthenticatedQuery(ExaminationNode , filterset_class=ExaminationFilter)
    examination = AuthenticatedNode.Field(ExaminationNode)
    all_assesment =  ViewAllAuthenticatedQuery(AssesmentNode , filterset_class=AssesmentFilter)
    assesment = AuthenticatedNode.Field(AssesmentNode)
    all_assesmenttype =  ViewAllAuthenticatedQuery(AssesmentTypeNode , filterset_class=AssesmentTypeFilter)
    assesmenttype = AuthenticatedNode.Field(AssesmentTypeNode)




    
