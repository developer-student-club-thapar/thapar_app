from graphql_relay.node.node import from_global_id
from .schema import UserNode
import graphene
from django.contrib.auth.models import User
from graphene_django.types import DjangoObjectType
from hashx.decorators import every_authenticated


class CreateUser(graphene.relay.ClientIDMutation):
    user = graphene.Field(UserNode)
    token = graphene.String()
    class Input:
        username = graphene.String()
        password = graphene.String()
        email = graphene.String()


    @classmethod
    def mutate_and_get_payload(cls , root , info , **input):
        username = input.get('username')
        email = input.get('email')
        password = input.get('password')
        if(len(username) > 32):
            raise Exception('Username length should be less than 32 characters')
        if(len(password) < 8 ):
            raise Exception('Password should be minimum 8 characters long')
        user = User.objects.create_user(username = username, email = email, password = password)
        return CreateUser(user=user , token = "lol")