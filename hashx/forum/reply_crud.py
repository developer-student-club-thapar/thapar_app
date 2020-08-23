from .models import Reply , Question
from graphql_relay.node.node import from_global_id
from .schema import ReplyNode
import graphene
from graphene_django.types import DjangoObjectType
from hashx.decorators import every_authenticated


class CreateReply(graphene.relay.ClientIDMutation):
    reply = graphene.Field(ReplyNode)

    class Input:
        question = graphene.String()
        content = graphene.String()

    @classmethod
    @every_authenticated
    def mutate_and_get_payload(cls, root, info, **input):
        user = info.context.user
        content = input.get('content')
        question = input.get('question')
        questionId = from_global_id(question)[1]
        question = Question.objects.get(pk=questionId)
        reply = Reply.objects.create(
            creator=user, content=content, question=question)
        reply.save()
        return CreateReply(reply=reply)


class UpdateReply(graphene.relay.ClientIDMutation):
    reply = graphene.Field(ReplyNode)

    class Input:
        id = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        reply = Reply.objects.get(pk=id)
        reply.save()
        return UpdateReply(reply=reply)
