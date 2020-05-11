from .models import MessUnitComment
from graphql_relay.node.node import from_global_id
from .schema import MessUnitCommentNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateMessUnitComment(graphene.relay.ClientIDMutation):
    messunitcomment = graphene.Field(MessUnitCommentNode)

    class Input:
        messunit = graphene.String()
        stars = graphene.Int()
        comment = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        messunit = input.get('messunit')
        stars = input.get('stars')
        comment = input.get('comment')
        messunitcomment = MessUnitComment(messunit=messunit, stars=stars, comment=comment)

        messunitcomment.save()
        return CreateMessUnitComment(messunitcomment=messunitcomment)


class UpdateMessUnitComment(graphene.relay.ClientIDMutation):
    messunitcomment = graphene.Field(MessUnitCommentNode)

    class Input:
        id = graphene.String()
        messunit = graphene.String()
        stars = graphene.Int()
        comment = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        messunit = input.get('messunit')
        stars = input.get('stars')
        comment = input.get('comment')
        messunitcomment = MessUnitComment.objects.get(pk=id)

        if messunit:
            messunitcomment.messunit = messunit

        if stars:
            messunitcomment.stars = stars

        if comment:
            messunitcomment.comment = comment

        messunitcomment.save()
        return UpdateMessUnitComment(messunitcomment=messunitcomment)
