import graphene
import graphql_jwt
from functools import wraps
from django.core.exceptions import PermissionDenied
from graphql_relay.node.node import from_global_id
from graphql_jwt.decorators import user_passes_test, context


student_check = user_passes_test(lambda user: user.student)
instructor_check = user_passes_test(lambda user: user.instructor)
every_authenticated = user_passes_test(lambda user: user.is_authenticated)


def same_user(object_user, current_user):
    if object_user != current_user:
        raise PermissionDenied
    return True


"""
usage example @file_size_check(lambda image: image.size , 'logo' , '10485760') 
it limits the file size to 10mb
"""


def file_size_check(image_name, file_size, exc=Exception("File Size Excedded")):
    def decorator(f):
        @wraps(f)
        @context(f)
        def wrapper(context, *args, **kwargs):
            if context.FILES[image_name].size < file_size:
                return f(*args, **kwargs)
            raise exc

        return wrapper

    return decorator


"""
a function to check if two users are same
it takes model and a function as argument.
it then extracts user associated to that model
the function compares the two users.
it can also be used as a decorator to compare two users
"""


def compare_users(func, model, exc=PermissionDenied):
    def decorator(f):
        @wraps(f)
        @context(f)
        def wrapper(context, *args, **kwargs):
            id = kwargs.get("id")
            id = from_global_id(id)
            id = id[1]
            object = model.objects.get(pk=id)
            model_user = object.user
            if func(model_user, context.user):
                return f(*args, **kwargs)
            raise exc

        return wrapper

    return decorator
