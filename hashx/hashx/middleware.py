from django.conf import settings
from profanity.validators import validate_is_profane
from django.http import HttpResponse
from profanity.extras import ProfanityFilter
from django.utils.deprecation import MiddlewareMixin


class Profanity(MiddlewareMixin):
    def process_request(self, request):
        # res = bytes(text, 'UTF-8')
        pf = ProfanityFilter()
        if pf.is_profane(request.body.decode('utf-8')) is True:
            raise Exception("Swear word")
        return None

class FileSizeCheck(object):
    def resolve(self, next, root, info, **args):
        print(info.context.FILE.size)
        if info.context.FILE.size > 10485760:
            raise Exception("Check File Size")
        return next(root, info, **args)
