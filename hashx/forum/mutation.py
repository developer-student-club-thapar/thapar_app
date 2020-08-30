import graphene
from .question_crud import CreateQuestion
from .reply_crud import CreateReply

class Mutation(graphene.AbstractType):
    create_question = CreateQuestion.Field()
    create_reply = CreateReply.Field()