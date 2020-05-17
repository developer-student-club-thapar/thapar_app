import graphene
import django_filters
from graphene_django import DjangoObjectType
from hashx.mixins import ViewAllAuthenticatedQuery
from .models import ExamBase , Examination , Assesment , AssesmentType

class ExamBaseFilter(django_filters.FilterSet):
    class Meta:
        model = ExamBase
        fields = '__all__'

class ExamBaseNode(DjangoObjectType):
    class Meta:
        model = ExamBase
        interfaces = (graphene.relay.Node , )
    
class ExaminationFilter(django_filters.FilterSet):
    class Meta:
        model = Examination
        fields = '__all__'
class ExaminationNode(DjangoObjectType):
    class Meta:
        model = Examination
        interfaces = (graphene.relay.Node , )
    
class AssesmentFilter(django_filters.FilterSet):
    class Meta:
        model = Assesment
        fields = '__all__'
class AssesmentNode(DjangoObjectType):
    class Meta:
        model = Assesment
        interfaces = (graphene.relay.Node , )
class AssesmentTypeFilter(django_filters.FilterSet):
    class Meta:
        model = AssesmentType
        fields = '__all__'
class AssesmentTypeNode(DjangoObjectType):
    class Meta:
        model = AssesmentType
        interfaces = (graphene.relay.Node , )
    
class RelayQuery(graphene.ObjectType):
    all_exambase =  ViewAllAuthenticatedQuery(ExamBaseNode , filterset_class=ExamBaseFilter)
    exambase = graphene.relay.Node.Field(ExamBaseNode)
    all_examination =  ViewAllAuthenticatedQuery(ExaminationNode , filterset_class=ExaminationFilter)
    examination = graphene.relay.Node.Field(ExaminationNode)
    all_assesment =  ViewAllAuthenticatedQuery(AssesmentNode , filterset_class=AssesmentFilter)
    assesment = graphene.relay.Node.Field(AssesmentNode)
    all_assesmenttype =  ViewAllAuthenticatedQuery(AssesmentTypeNode , filterset_class=AssesmentTypeFilter)
    assesmenttype = graphene.relay.Node.Field(AssesmentTypeNode)




    
