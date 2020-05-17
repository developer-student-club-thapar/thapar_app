from graphql_jwt.decorators import login_required
from graphene_django.filter import DjangoFilterConnectionField
from .decorators import student_check , instructor_check , viewall


class StudentOnlyQuery(DjangoFilterConnectionField):
    @classmethod
    @login_required
    @student_check
    def resolve_queryset(cls, connection, iterable, info, args, filtering_args=None, filterset_class=None):
        return super(StudentOnlyQuery, cls).resolve_queryset(connection, iterable, info, args, filtering_args, filterset_class)
class InstructorOnlyQuery(DjangoFilterConnectionField):
    @classmethod
    @login_required
    @instructor_check
    def resolve_queryset(cls, connection, iterable, info, args, filtering_args=None, filterset_class=None):
        return super(InstructorOnlyQuery, cls).resolve_queryset(connection, iterable, info, args, filtering_args, filterset_class)
class ViewAllAuthenticatedQuery(DjangoFilterConnectionField):
    @classmethod
    @login_required
    @viewall
    def resolve_queryset(cls, connection, iterable, info, args, filtering_args=None, filterset_class=None):
        return super(ViewAllAuthenticatedQuery, cls).resolve_queryset(connection, iterable, info, args, filtering_args, filterset_class)
class OpenForAllQuery(DjangoFilterConnectionField):
    @classmethod
    def resolve_queryset(cls, connection, iterable, info, args, filtering_args=None, filterset_class=None):
        return super(OpenForAllQuery, cls).resolve_queryset(connection, iterable, info, args, filtering_args, filterset_class)
