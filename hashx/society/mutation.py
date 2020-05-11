import graphene
from .society_crud import CreateSociety , UpdateSociety
from .event_crud import CreateEvent , UpdateEvent
class Mutation(graphene.AbstractType):
    create_society = CreateSociety.Field()
    update_society = UpdateSociety.Field()
    create_event  = CreateEvent.Field()
    update_event  = UpdateEvent.Field()
    