from .models import ExamBase
from graphql_relay.node.node import from_global_id
from .schema import ExamBaseNode
import graphene
from graphene_django.types import DjangoObjectType
class CreateExamBase(graphene.relay.ClientIDMutation):
    exambase = graphene.Field(ExamBaseNode)
    class Input:
        name = graphene.String()
        course = graphene.String()
        date = graphene.types.datetime.DateTime()
        date_created = graphene.types.datetime.DateTime()
        note = graphene.String()
        published = graphene.Boolean()        


    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        name = input.get('name')
        course = input.get('course')
        date = input.get('date')
        date_created = input.get('date_created')
        note = input.get('note')
        published = input.get('published')
        exambase = ExamBase(published = published , name = name , course = course , date_created = date_created ,date=date )
        exambase.save()
        return  CreateExamBase(exambase=exambase)
class UpdateExamBase(graphene.relay.ClientIDMutation):
    exambase = graphene.Field(ExamBaseNode)
    class Input:
        id = graphene.String()
        name = graphene.String()
        course = graphene.String()
        date = graphene.types.datetime.DateTime()
        date_created = graphene.types.datetime.DateTime()
        note = graphene.String()
        published = graphene.Boolean()     
    
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        exambase = ExamBase.objects.get(pk=id)
        name = input.get('name')
        course = input.get('course')
        date = input.get('date')
        date_created = input.get('date_created')
        note = input.get('note')
        published = input.get('published')
        if name:
            exambase.name = name
        if course:
            exambase.course = course
        if date:
            exambase.date = date
        if date_created:
            exambase.date_created = date_created
        if note:
            exambase.note = note
        if published:
            exambase.published = published
        exambase.save()
        return UpdateExamBase(exambase=exambase)