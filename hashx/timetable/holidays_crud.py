import graphene
from .models import Holidays
from graphql_relay.node.node import from_global_id
from .schema import HolidaysNode
from graphene_django.types import DjangoObjectType
from django.http import HttpResponseNotAllowed


class CreateHolidays(graphene.relay.ClientIDMutation):
    holiday = graphene.Field(HolidaysNode)

    class Input:
        name = graphene.String()
        date = graphene.types.datetime.Date()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        user = info.context.user
        name = input.get('name')
        date = input.get('date')
        holiday = Holidays(name=name, date=date)
        if not user.is_authenticated:
            raise Exception("permission denied")
        else:
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
        user = info.context.user
        holiday = Holidays.objects.get(pk=id)
        name = input.get('name')
        date = input.get('date')
        if name:
            holiday.name = name
        if date:
            holiday.date = date
        if not user.is_authenticated:
            raise Exception("Permission Denied")
        else:
            holiday.save()
        return UpdateHolidays(holiday=holiday)
