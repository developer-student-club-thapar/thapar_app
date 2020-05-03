import graphene
from graphene_django.types import DjangoObjectType
from .models import Member, VoluteershipApplication, VoluteershipType
from django.contrib.auth.models import User

class MemberType(DjangoObjectType):
    class Meta:
        model = Member
        fields = '__all__'


class VolunteershipApplicationType(DjangoObjectType):
    class Meta:
        model = VoluteershipApplication
        fields = '__all__'


class VolunteershipTypeType(DjangoObjectType):
    class Meta:
        model = VoluteershipType
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = User


class Query(object):
    all_member = graphene.List(MemberType)
    member = graphene.List(
        MemberType,
        name = graphene.String(),
        user = graphene.String(),
        role = graphene.String(),
        email = graphene.String(),
    )

    def resolve_all_member(self, info, **kwargs):
        return Member.objects.all()

    def resolve_member(self, info, **kwargs):
        name = kwargs.get("name")
        user = kwargs.get("user")
        role = kwargs.get("role")
        email = kwargs.get("email")

        if name is not None:
            return Member.objects.filter(name=name)
        if user is not None:
            return Member.objects.filter(user=user).all()
        if role is not None:
            return Member.objects.filter(role=role).all()
        if email is not None:
            return Member.objects.filter(email=email)

################################################################################################################

    all_volunteershipapplication = graphene.List(VolunteershipApplicationType)

    def resolve_all_volunteershipapplication(self, info, **kwargs):
        return VoluteershipApplication.objects.all()

################################################################################################################

    all_volunteershiptype = graphene.List(VolunteershipTypeType)
    volunteershiptype = graphene.List(
        VolunteershipTypeType,
        name = graphene.String(),
    )

    def resolve_all_volunteershiptype(self, info, **kwargs):
        return VoluteershipType.objects.all()

    def resolve_volunteershiptype(self, info, **kwargs):
        name = kwargs.get("name")

        if name is not None:
            return VoluteershipType.objects.filter(name=name)


class CreateMember(graphene.Mutation):
    id = graphene.Int()
    role = graphene.String()
    email = graphene.String()


    class Arguments:
        role = graphene.String(required = False)
        email = graphene.String(required = False)

    member = graphene.Field(MemberType)

    def mutate(self, info, role, email):
        member = Member(role=role, email=email)
        member.save()

        return CreateMember(
            id = member.id,
            role = member.role,
            email = member.email,
        )


class Mutation(graphene.ObjectType):
    create_member = CreateMember.Field()