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

def run_only_once(resolve_func):
    from functools import wraps

    @wraps(resolve_func)
    def wrapper(self, next, root, info, *args, **kwargs):
        has_context = info.context is not None
        decorator_name = "__{}_run__".format(self.__class__.__name__)

        if has_context:
            if isinstance(info.context, dict) and not info.context.get(decorator_name, False):
                info.context[decorator_name] = True
                return resolve_func(self, next, root, info, *args, **kwargs)
            elif not isinstance(info.context, dict) and not getattr(info.context, decorator_name, False):
                # Graphene: it could be a Context or WSGIRequest object
                setattr(info.context, decorator_name, True)
                return resolve_func(self, next, root, info, *args, **kwargs)

        # No context, run_only_once will not work
        return next(root, info, *args, **kwargs)

    return wrapper
