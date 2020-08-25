from .models import Question
from graphql_relay.node.node import from_global_id
from .schema import QuestionNode
from acad.models import File
import graphene
from hashx.decorators import every_authenticated
from graphene_django.types import DjangoObjectType
class CreateQuestion(graphene.relay.ClientIDMutation):
    question = graphene.Field(QuestionNode)
    class Input:
        category = graphene.String()
        title = graphene.String()
        content = graphene.String()
        file = graphene.String()
    @classmethod
    @every_authenticated
    def mutate_and_get_payload(cls,root, info, **input):
        user = info.context.user
        title = input.get('title')
        content = input.get('content')
        file = input.get('file')
        fileId = from_global_id(file)[1]
        file = File.objects.get(pk=fileId)
        question = Question.objects.create(owner=user , title=title , content=content , file=file)
        question.save()
        return  CreateQuestion(question=question)
class UpdateQuestion(graphene.relay.ClientIDMutation):
    question = graphene.Field(QuestionNode)
    class Input:
        id = graphene.String()
        
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        question = Question.objects.get(pk=id)
        question.save()
        return UpdateQuestion(question=question)