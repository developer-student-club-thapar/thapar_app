
from .decorators import run_only_once
from cryptography.fernet import Fernet
from decouple import config


key = Fernet.generate_key()
f = Fernet(key)

class CustomAuthorizationMiddleware(object):



    @run_only_once
    def resolve(self, next, root, info, **args):
        try:
            secrets = info.context.headers['oops']
        except Exception:
            print(Exception)
        finally:
            return next(root, info, **args)
        return next(root, info, **args)
