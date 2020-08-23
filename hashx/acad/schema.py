import graphene
import django_filters
from graphene_django import DjangoObjectType
from hashx.mixins import ViewAllAuthenticatedQuery, AuthenticatedNode, AuthenticatedNode
from .models import Drivefolder, Course, Batch, Branch, Textbook, File, FirstYearBatch, AcademicCalendar, FileType
from django.db import models


class DrivefolderFilter(django_filters.FilterSet):
    class Meta:
        model = Drivefolder
        fields = '__all__'


class DrivefolderNode(DjangoObjectType):
    class Meta:
        model = Drivefolder
        interfaces = (AuthenticatedNode, )


class CourseFilter(django_filters.FilterSet):
    class Meta:
        model = Course
        fields = '__all__'


class CourseNode(DjangoObjectType):
    class Meta:
        model = Course
        interfaces = (AuthenticatedNode, )


class BranchFilter(django_filters.FilterSet):
    class Meta:
        model = Branch
        fields = '__all__'


class BranchNode(DjangoObjectType):
    class Meta:
        model = Branch
        interfaces = (AuthenticatedNode, )


class FirstYearBatchFilter(django_filters.FilterSet):
    class Meta:
        model = FirstYearBatch
        fields = '__all__'


class FirstYearBatchNode(DjangoObjectType):
    class Meta:
        model = FirstYearBatch
        interfaces = (AuthenticatedNode, )


class BatchFilter(django_filters.FilterSet):
    class Meta:
        model = Batch
        fields = '__all__'


class BatchNode(DjangoObjectType):
    class Meta:
        model = Batch
        interfaces = (AuthenticatedNode, )


class TextbookFilter(django_filters.FilterSet):
    class Meta:
        model = Textbook
        fields = '__all__'


class TextbookNode(DjangoObjectType):
    class Meta:
        model = Textbook
        interfaces = (AuthenticatedNode, )


class FileFilter(django_filters.FilterSet):
    class Meta:
        model = File
        fields = '__all__'
        filter_overrides = {
            models.FileField: {
                'filter_class': django_filters.CharFilter,
                'extra': lambda f: {
                    'lookup_expr': 'icontains',
                }
            },
            models.ImageField: {
                'filter_class': django_filters.CharFilter,
                'extra': lambda f: {
                    'lookup_expr': 'icontains',
                }
            }}


class FileNode(DjangoObjectType):
    class Meta:
        model = File
        interfaces = (AuthenticatedNode, )


class FileTypeFilter(django_filters.FilterSet):
    class Meta:
        model = FileType
        fields = '__all__'


class FileTypeNode(DjangoObjectType):
    class Meta:
        model = FileType
        interfaces = (AuthenticatedNode, )


class AcademicCalendarFilter(django_filters.FilterSet):
    class Meta:
        model = AcademicCalendar
        fields = '__all__'
        filter_overrides = {
            models.FileField: {
                'filter_class': django_filters.CharFilter,
                'extra': lambda f: {
                    'lookup_expr': 'icontains'
                }
            }}


class AcademicCalendarNode(DjangoObjectType):
    class Meta:
        model = AcademicCalendar
        interfaces = (AuthenticatedNode, )


class RelayQuery(graphene.ObjectType):
    all_filetypes = ViewAllAuthenticatedQuery(
        FileTypeNode, filterset_class=FileTypeFilter)
    filetypes = AuthenticatedNode.Field(FileTypeNode)
    all_drivefolders = ViewAllAuthenticatedQuery(
        DrivefolderNode, filterset_class=DrivefolderFilter)
    drivefolder = AuthenticatedNode.Field(DrivefolderNode)
    all_courses = ViewAllAuthenticatedQuery(
        CourseNode, filterset_class=CourseFilter)
    course = AuthenticatedNode.Field(CourseNode)
    all_branches = ViewAllAuthenticatedQuery(
        BranchNode, filterset_class=BranchFilter)
    branch = AuthenticatedNode.Field(BranchNode)
    all_academiccalendars = ViewAllAuthenticatedQuery(
        AcademicCalendarNode, filterset_class=AcademicCalendarFilter)
    academiccalendar = AuthenticatedNode.Field(AcademicCalendarNode)
    all_files = ViewAllAuthenticatedQuery(FileNode, filterset_class=FileFilter)
    file = AuthenticatedNode.Field(FileNode)
    all_textbooks = ViewAllAuthenticatedQuery(
        TextbookNode, filterset_class=TextbookFilter)
    textbook = AuthenticatedNode.Field(TextbookNode)
    all_batches = ViewAllAuthenticatedQuery(
        BatchNode, filterset_class=BatchFilter)
    batch = AuthenticatedNode.Field(BatchNode)
    all_firstyearbatches = ViewAllAuthenticatedQuery(
        FirstYearBatchNode, filterset_class=FirstYearBatchFilter)
    firstyearbatch = AuthenticatedNode.Field(FirstYearBatchNode)
    amazonurl = graphene.String(fileId = graphene.String())
    
    def resolve_amazonurl(self, info, fileId=None, **kwargs):
        if fileId:
            fileId = AuthenticatedNode.from_global_id(fileId)[1]
            file = File.objects.get(pk= fileId)
            return file.file.url
        return Exception('File Not Found')
