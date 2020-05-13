from .models import Member
from graphql_relay.node.node import from_global_id
from .schema import MemberNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateMember(graphene.relay.ClientIDMutation):
    member = graphene.Field(MemberNode)

    class Input:
        name = graphene.String()
        role = graphene.String()
        email = graphene.String()
        github_url = graphene.String()
        linkedin_url = graphene.String()
        twitter_url = graphene.String()
        medium_url = graphene.String()
        dev_url = graphene.String()
        instagram_url = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        name = input.get('name')
        role = input.get('role')
        email = input.get('email')
        github_url = input.get('github_url')
        linkedin_url = input.get('linkedin_url')
        twitter_url = input.get('twitter_url')
        medium_url = input.get('medium_url')
        dev_url = input.get('dev_url')
        instagram_url = input.get('instagram_url')
        image = info.context.FILES
        member = Member(name=name, role=role, email=email, github_url=github_url, linkedin_url=linkedin_url, twitter_url=twitter_url, medium_url=medium_url, dev_url=dev_url, instagram_url=instagram_url, image=image)

        member.save()
        return CreateMember(member=member)


class UpdateMember(graphene.relay.ClientIDMutation):
    member = graphene.Field(MemberNode)

    class Input:
        id = graphene.String()
        name = graphene.String()
        role = graphene.String()
        email = graphene.String()
        github_url = graphene.String()
        linkedin_url = graphene.String()
        twitter_url = graphene.String()
        medium_url = graphene.String()
        dev_url = graphene.String()
        instagram_url = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        name = input.get('name')
        role = input.get('role')
        email = input.get('email')
        github_url = input.get('github_url')
        linkedin_url = input.get('linkedin_url')
        twitter_url = input.get('twitter_url')
        medium_url = input.get('medium_url')
        dev_url = input.get('dev_url')
        instagram_url = input.get('instagram_url')
        image = info.context.FILES
        member = Member.objects.get(pk=id)

        if name:
            member.name = name

        if role:
            member.role = role

        if email:
            member.email = email

        if github_url:
            member.github_url = github_url

        if linkedin_url:
            member.linkedin_url = linkedin_url

        if twitter_url:
            member.twitter_url = twitter_url

        if medium_url:
            member.medium_url = medium_url

        if dev_url:
            member.dev_url = dev_url

        if instagram_url:
            member.instagram_url = instagram_url

        if image:
            member.image = image

        member.save()
        return UpdateMember(member=member)
