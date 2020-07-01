from django.contrib.auth.mixins import LoginRequiredMixin
from graphql import GraphQLError
from graphene_django.views import GraphQLView
from django.contrib.auth.models import User



class PrivateGraphQLView(LoginRequiredMixin, GraphQLView):
    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            raise GraphQLError("You Must Be Logged In")
            
        return super().dispatch(request, *args, **kwargs)
    pass 