from functools import wraps
from django.core.exceptions import PermissionDenied
from graphql_jwt.decorators import user_passes_test , context

student_check = user_passes_test(lambda user: user.student)
instructor_check = user_passes_test(lambda user: user.instructor)
every_authenticated = user_passes_test(lambda user: user.is_authenticated)


def same_user(object_user , current_user):
    if object_user != current_user:
        raise PermissionDenied
    return None