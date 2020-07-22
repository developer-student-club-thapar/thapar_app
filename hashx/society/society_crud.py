from .models import Society
from graphql_relay.node.node import from_global_id
from .schema import SocietyNode
import graphene
from hashx.decorators import compare_users, same_user
from graphene_django.types import DjangoObjectType


class CreateSociety(graphene.relay.ClientIDMutation):
    society = graphene.Field(SocietyNode)

    class Input:
        name = graphene.String()
        category = graphene.String()
        about = graphene.String()
        student_head = graphene.String()
        site_link = graphene.String()
        user = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        name = input.get('name')
        category = input.get('category')
        about = input.get('about')
        student_head = input.get('student_head')
        site_link = input.get('site_link')
        user = info.context.user
        logo = info.context.FILES['logo']
        image = info.context.FILES['image']
        society = Society(name=name, category=category, about=about,
                          student_head=student_head, site_link=site_link, user=user)
        if not user.is_authenticated:
            raise Exception("Permission Denied")
        else:
            society.save()
            if image:
                society.image = image
            if logo:
                society.logo = logo
            society.save()
        return CreateSociety(society=society)


class UpdateSociety(graphene.relay.ClientIDMutation):
    society = graphene.Field(SocietyNode)

    class Input:
        id = graphene.String()
        name = graphene.String()
        category = graphene.String()
        about = graphene.String()
        student_head = graphene.String()
        site_link = graphene.String()
        user = graphene.String()

    @classmethod
    @compare_users(same_user, Society)
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        name = input.get('name')
        category = input.get('category')
        about = input.get('about')
        student_head = input.get('student_head')
        site_link = input.get('site_link')
        user = info.context.user
        # if info.context.FILES['image']:
        #     image = info.context.FILES['image']
        # if info.context.FILES['logo']:
        #     logo = info.context.FILES['logo']
        society = Society.objects.get(pk=id)
        if user != society.user and not user.is_authenticated:
            raise Exception("Permission Denied")
        else:
            if name:
                society.name = name
            if category:
                society.category = category
            if about:
                society.about = about
            if student_head:
                society.student_head = student_head
            if site_link:
                society.site_link = site_link
            if user:
                society.user = user
            # if image:
            #     society.image = image
            # if logo:
            #     society.logo = logo
            society.save()
        return UpdateSociety(society=society)
