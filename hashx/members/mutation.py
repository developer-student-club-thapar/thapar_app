import graphene
from .member_crud import UpdateMember, CreateMember
from .volunteershipapplication_crud import UpdateVolunteershipApplication, CreateVolunteershipApplication

class Mutation(graphene.AbstractType):
    create_member = CreateMember.Field()
    update_member = UpdateMember.Field()
    create_volunteershipapplication = CreateVolunteershipApplication.Field()
    update_volunteershipapplication = UpdateVolunteershipApplication.Field()