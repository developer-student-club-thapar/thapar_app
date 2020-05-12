from .models import Holidays
from graphql_relay.node.node import from_global_id
from .schema import HolidaysNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateHolidays(graphene.relay.ClientIDMutation):
    holiday = graphene.Field(HolidaysNode)

    class Input:
        name = graphene.String()
        date = graphene.types.datetime.Date()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        name = input.get('name')
        date = input.get('date')
        holiday = Holidays(name=name, date=date)
        holiday.save()
        return CreateHolidays(holiday=holiday)


class UpdateHolidays(graphene.relay.ClientIDMutation):
    holiday = graphene.Field(HolidaysNode)

    class Input:
        id = graphene.String()
        name = graphene.String()
        date = graphene.types.datetime.Date()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        holiday = Holidays.objects.get(pk=id)
        name = input.get('name')
        date = input.get('date')
        if name:
            holiday.name = name
        if date:
            holiday.date = date
        holiday.save()
        return UpdateHolidays(holiday=holiday)
