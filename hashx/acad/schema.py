import graphene
from graphql_relay import to_global_id
import django_filters
from graphene_django import DjangoObjectType
from hashx.mixins import ViewAllAuthenticatedQuery
from .models import Drivefolder, Course, Batch, Branch, Textbook, File, FirstYearBatch, AcademicCalendar
from django.db import models


class DrivefolderFilter(django_filters.FilterSet):
    class Meta:
        model = Drivefolder
        fields = '__all__'

        
class DrivefolderNode(DjangoObjectType):
    class Meta:
        model = Drivefolder
        interfaces = (graphene.relay.Node , )


class CourseFilter(django_filters.FilterSet):
    class Meta:
        model = Course
        fields = '__all__'


class CourseNode(DjangoObjectType):
    class Meta:
        model = Course
        interfaces = (graphene.relay.Node , )


class BranchFilter(django_filters.FilterSet):
    class Meta:
        model = Branch
        fields = '__all__'


class BranchNode(DjangoObjectType):
    class Meta:
        model = Branch
        interfaces = (graphene.relay.Node , )


class FirstYearBatchFilter(django_filters.FilterSet):
    class Meta:
        model = FirstYearBatch
        fields = '__all__'


class FirstYearBatchNode(DjangoObjectType):
    class Meta:
        model = FirstYearBatch
        interfaces = (graphene.relay.Node , )


class BatchFilter(django_filters.FilterSet):
    class Meta:
        model = Batch
        fields = '__all__'


class BatchNode(DjangoObjectType):
    class Meta:
        model = Batch
        interfaces = (graphene.relay.Node , )


class TextbookFilter(django_filters.FilterSet):
    class Meta:
        model = Textbook
        fields = '__all__'


class TextbookNode(DjangoObjectType):
    class Meta:
        model = Textbook
        interfaces = (graphene.relay.Node , )


class FileFilter(django_filters.FilterSet):
    class Meta:
        model = File
        fields = '__all__'
        filter_overrides = {
        models.FileField :{
            'filter_class' : django_filters.CharFilter,
            'extra' : lambda f:{
                'lookup_expr': 'icontains'
            }
        },
        models.ImageField :{
            'filter_class' : django_filters.CharFilter,
            'extra' : lambda f:{
                'lookup_expr': 'icontains'
            }
        }}


class FileNode(DjangoObjectType):
    class Meta:
        model = File
        interfaces = (graphene.relay.Node , )


class AcademicCalendarFilter(django_filters.FilterSet):
    class Meta:
        model = AcademicCalendar
        fields = '__all__'
        filter_overrides = {
        models.FileField :{
            'filter_class' : django_filters.CharFilter,
            'extra' : lambda f:{
                'lookup_expr': 'icontains'
            }
        }}


class AcademicCalendarNode(DjangoObjectType):
    class Meta:
        model = AcademicCalendar
        interfaces = (graphene.relay.Node , )


class RelayQuery(graphene.ObjectType):
    all_drivefolders = ViewAllAuthenticatedQuery(DrivefolderNode , filterset_class=DrivefolderFilter)
    drivefolder = graphene.relay.Node.Field(DrivefolderNode)
    all_courses = ViewAllAuthenticatedQuery(CourseNode , filterset_class=CourseFilter)
    course = graphene.relay.Node.Field(CourseNode)
    all_branches = ViewAllAuthenticatedQuery(BranchNode , filterset_class=BranchFilter)
    branch = graphene.relay.Node.Field(BranchNode)
    all_academiccalendars = ViewAllAuthenticatedQuery(AcademicCalendarNode , filterset_class=AcademicCalendarFilter)
    academiccalendar = graphene.relay.Node.Field(AcademicCalendarNode)
    all_files = ViewAllAuthenticatedQuery(FileNode , filterset_class=FileFilter)
    file = graphene.relay.Node.Field(FileNode)
    all_textbooks = ViewAllAuthenticatedQuery(TextbookNode , filterset_class=TextbookFilter)
    textbook = graphene.relay.Node.Field(TextbookNode)
    all_batches = ViewAllAuthenticatedQuery(BatchNode , filterset_class=BatchFilter)
    batch = graphene.relay.Node.Field(BatchNode)
    all_firstyearbatches = ViewAllAuthenticatedQuery(FirstYearBatchNode , filterset_class=FirstYearBatchFilter)
    firstyearbatch = graphene.relay.Node.Field(FirstYearBatchNode)