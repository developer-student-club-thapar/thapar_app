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
            raise Exception("Please remove any profanity/swear words.")
        return None
