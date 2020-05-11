from .models import VolunteershipApplication
from graphql_relay.node.node import from_global_id
from .schema import VolunteershipApplicationNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateVolunteershipApplication(graphene.relay.ClientIDMutation):
    volunteershipapplication = graphene.Field(VolunteershipApplicationNode)

    class Input:
        type = graphene.String()
        why = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        type = input.get('type')
        why = input.get('why')
        volunteershipapplication = VolunteershipApplication(name=name, )

        volunteershipapplication.save()
        return CreateVolunteershipApplication(volunteershipapplication=volunteershipapplication)


class UpdateVolunteershipApplication(graphene.relay.ClientIDMutation):
    volunteershipapplication = graphene.Field(VolunteershipApplicationNode)

    class Input:
        id = graphene.String()
        type = graphene.String()
        why = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        type = input.get('type')
        why = input.get('why')
        volunteershipapplication = VolunteershipApplication.objects.get(pk=id)

        if type:
            volunteershipapplication.type = type

        if why:
            volunteershipapplication.why = why

        volunteershipapplication.save()
        return UpdateVolunteershipApplication(volunteershipapplication=volunteershipapplication)
