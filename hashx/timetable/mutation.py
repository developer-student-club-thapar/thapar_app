import graphene
from .holidays_crud import CreateHolidays, UpdateHolidays
from .location_crud import CreateLocation, UpdateLocation
from .class_crud import CreateClass, UpdateClass


class Mutation(graphene.AbstractType):
    create_holiday = CreateHolidays.Field()
    upadate_holiday = UpdateHolidays.Field()
    create_location = CreateLocation.Field()
    upadate_location = UpdateLocation.Field()
    create_class = CreateClass.Field()
    update_class = UpdateClass.Field()
