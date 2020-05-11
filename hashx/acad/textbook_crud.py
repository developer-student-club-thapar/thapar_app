from .models import Textbook
from graphql_relay.node.node import from_global_id
from .schema import TextbookNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateTextbook(graphene.relay.ClientIDMutation):
    textbook = graphene.Field(TextbookNode)

    class Input:
        name = graphene.String()
        publisher = graphene.String()
        course = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        name = input.get('name')
        publisher = input.get('publisher')
        course = input.get('course')
        textbook = Textbook(name=name, publisher=publisher, course=course)

        textbook.save()
        return CreateTextbook(textbook=textbook)


class UpdateTextbook(graphene.relay.ClientIDMutation):
    textbook = graphene.Field(TextbookNode)

    class Input:
        id = graphene.String()
        name = graphene.String()
        publisher = graphene.String()
        course = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        name = input.get('name')
        publisher = input.get('publisher')
        course = input.get('course')
        textbook = Textbook.objects.get(pk=id)

        if name:
            textbook.name = name

        if publisher:
            textbook.publisher = publisher

        if course:
            textbook.course = course

        textbook.save()
        return UpdateTextbook(textbook=textbook)
