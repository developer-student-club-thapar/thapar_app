from .models import TimetableBoard
from graphql_relay.node.node import from_global_id
from .schema import TimetableBoardNode
import graphene
from graphene_django.types import DjangoObjectType
class CreateTimetableBoard(graphene.relay.ClientIDMutation):
    timetableboard = graphene.Field(TimetableBoardNode)
    class Input:
        name = graphene.String()
        start_repetion = graphene.types.datetime.DateTime()
        end_repetition = graphene.types.datetime.DateTime()
        batch = graphene.String()
        admin_user = graphene.String()
        created_date = graphene.types.datetime.DateTime()
        modified_date = graphene.types.datetime.DateTime()
        
        
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        name = input.get('name')
        start_repetion = input.get('start_repetion')
        end_repetition = input.get('end_repetition')
        batch = input.get('batch')
        admin_user = input.get('admin_user')
        created_date = input.get('created_date')
        modified_date = input.get('modified_date')
        timetableboard = TimetableBoard(name=name , start_repetion = start_repetion , end_repetition = end_repetition , batch=batch , admin_user=admin_user , created_date=created_date , modified_date=modified_date)
        timetableboard.save()
        return  CreateTimetableBoard(timetableboard=timetableboard)

class UpdateTimetableBoard(graphene.relay.ClientIDMutation):
    timetableboard  = graphene.Field(TimetableBoardNode)
    class Input:
        id = graphene.String()
        name = graphene.String()
        start_repetion = graphene.types.datetime.DateTime()
        end_repetition = graphene.types.datetime.DateTime()
        batch = graphene.String()
        admin_user = graphene.String()
        created_date = graphene.types.datetime.DateTime()
        modified_date = graphene.types.datetime.DateTime()
        
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        timetableboard = TimetableBoard.objects.get(pk=id)
        name = input.get('name')
        start_repetion = input.get('start_repetion')
        end_repetition = input.get('end_repetition')
        batch = input.get('batch')
        admin_user = input.get('admin_user')
        created_date = input.get('created_date')
        modified_date = input.get('modified_date')
        if name:
            timetableboard.name = name
        if start_repetion:
            timetableboard.start_repetion = start_repetion
        if end_repetition:
            timetableboard.end_repetition = end_repetition
        if batch:
            timetableboard.batch = batch
        if admin_user:
            timetableboard.admin_user = admin_user
        if created_date:
            timetableboard.create_date = created_date
        if modified_date:
            timetableboard.modified_date = modified_date
        timetableboard.save()
        return UpdateTimetableBoard(timetableboard=timetableboard)
        