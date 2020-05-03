import graphene
from graphene_django.types import DjangoObjectType
from .models import Member, VoluteershipApplication, VoluteershipType
from .schema import MemberType, VoluteershipType, VolunteershipApplicationType
from django.contrib.auth.models import User


class CreateMember(graphene.Mutation):
    id = graphene.UUID()
    name = graphene.String()
    user = graphene.String()
    role = graphene.String()
    email = graphene.String()
    github_url = graphene.String()
    linkedin_url = graphene.String()
    twitter_url = graphene.String()
    medium_url = graphene.String()
    dev_url = graphene.String()
    instagram_url = graphene.String()

    class Arguments:
        name = graphene.String()
        user = graphene.String()
        role = graphene.String()
        email = graphene.String()
        github_url = graphene.String()
        linkedin_url = graphene.String()
        twitter_url = graphene.String()
        medium_url = graphene.String()
        dev_url = graphene.String()
        instagram_url = graphene.String()

    def mutate(self, info, name, user, role, email, github_url, linkedin_url, twitter_url, medium_url, dev_url, instagram_url):
        member = Member(name=name, user=user, role=role, email=email, github_url=github_url, linkedin_url=linkedin_url, twitter_url=twitter_url, medium_url=medium_url, dev_url=dev_url, instagram_url=instagram_url)
        member.save()

        return CreateMember(
            id = member.id,
            name = member.name,
            role = member.role,
            email = member.email,
            github_url = member.github_url,
            linkedin_url = member.linkedin_url,
            twitter_url = member.twitter_url,
            medium_url = member.medium_url,
            dev_url = member.dev_url,
            instagram_url = member.instagram_url,
        )


class UpdateMember(graphene.Mutation):
    class Arguments:
        id = graphene.UUID()
        name = graphene.String()
        user = graphene.String()
        role = graphene.String()
        email = graphene.String()
        github_url = graphene.String()
        linkedin_url = graphene.String()
        twitter_url = graphene.String()
        medium_url = graphene.String()
        dev_url = graphene.String()
        instagram_url = graphene.String()

    member = graphene.Field(MemberType)

    def mutate(self, info, name, user, role, email, github_url, linkedin_url, twiiter_url, medium_url, dev_url, instagram_url):
        member = Member.objects.get(pk=id)
        member.name = name
        member.user = user
        member.role = role
        member.email = email
        member.github_url = github_url
        member.linkedin_url = linkedin_url
        member.twitter_url = twiiter_url
        member.medium_url = medium_url
        member.dev_url = dev_url
        member.instagram_url = instagram_url
        member.save()

        return UpdateMember(member=member)


class Mutation(graphene.ObjectType):
    create_member = CreateMember.Field()
    update_member = UpdateMember.Field()