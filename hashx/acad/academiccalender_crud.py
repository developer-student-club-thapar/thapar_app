from .models import AcademicCalendar
from graphql_relay.node.node import from_global_id
from .schema import AcademicCalendarNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateAcademicCalendar(graphene.relay.ClientIDMutation):
    academiccalendar = graphene.Field(AcademicCalendarNode)

    class Input:
        type = graphene.String()
        name = graphene.String()
        start_date = graphene.String()
        end_date = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        type = input.get('type')
        name = input.get('name')
        start_date = input.get('start_date')
        end_date = input.get('end_date')
        academiccalendar = AcademicCalendar(name=name, type=type, start_date=start_date, end_date=end_date)

        academiccalendar.save()
        return CreateAcademicCalendar(academiccalendar=academiccalendar)


class UpdateAcademicCalendar(graphene.relay.ClientIDMutation):
    academiccalendar = graphene.Field(AcademicCalendarNode)

    class Input:
        id = graphene.String()
        type = graphene.String()
        name = graphene.String()
        start_date = graphene.String()
        end_date = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        type = input.get('type')
        name = input.get('name')
        start_date = input.get('start_date')
        end_date = input.get('end_date')
        academiccalendar = AcademicCalendar.objects.get(pk=id)

        if type:
            academiccalendar.type = type

        if name:
            academiccalendar.name = name

        if start_date:
            academiccalendar.start_date = start_date

        if end_date:
            academiccalendar.end_date = end_date

        academiccalendar.save()
        return UpdateAcademicCalendar(academiccalendar=academiccalendar)
