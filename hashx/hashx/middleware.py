

class CustomAuthorizationMiddleware(object):
    def resolve(self, next, root, info, **args):
        user = info.context.user
        if not user.is_authenticated:
            return None
        return next(root, info, **args)