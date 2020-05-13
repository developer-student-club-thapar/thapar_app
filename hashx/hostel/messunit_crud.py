from .models import MessUnit
from graphql_relay.node.node import from_global_id
from .schema import MessUnitNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateMessUnit(graphene.relay.ClientIDMutation):
    messunit = graphene.Field(MessUnitNode)

    class Input:
        mess = graphene.String()
        day = graphene.String()
        type = graphene.String()
        food = graphene.String()
        slug = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        mess = input.get('mess')
        day = input.get('day')
        type = input.get('type')
        food = input.get('food')
        slug = input.get('slug')
        image = info.context.FILES
        messunit = MessUnit(mess=mess, day=day, type=type, food=food, slug=slug, image=image)

        messunit.save()
        return CreateMessUnit(messunit=messunit)


class UpdateMessUnit(graphene.relay.ClientIDMutation):
    messunit = graphene.Field(MessUnitNode)

    class Input:
        id = graphene.String()
        mess = graphene.String()
        day = graphene.String()
        type = graphene.String()
        food = graphene.String()
        slug = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        mess = input.get('mess')
        day = input.get('day')
        type = input.get('type')
        food = input.get('food')
        slug = input.get('slug')
        image = info.context.FILES
        messunit = MessUnit.objects.get(pk=id)

        if mess:
            messunit.mess = mess

        if day:
            messunit.day = day

        if type:
            messunit.type = type

        if food:
            messunit.food = food

        if slug:
            messunit.slug = slug

        if image:
            messunit.image = image

        messunit.save()
        return UpdateMessUnit(messunit=messunit)
