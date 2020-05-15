from django.core.exceptions import PermissionDenied
from .mixins import CheckUserType , CheckNodeType
class CustomAuthorizationMiddleware(CheckUserType , object):
    
    
    def resolve(self, next, root, info, **args):
        context = info.context
        # user_type  = CheckUserType.check_user_type(self, user = context.user)
        CheckNodeType.check_node_type(self , root)
        # user = info.context.user
        # if not user.is_authenticated:
        #     return PermissionDenied
        return next(root, info, **args)