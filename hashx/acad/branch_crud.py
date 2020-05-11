from .models import Branch
from graphql_relay.node.node import from_global_id
from .schema import BranchNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateBranch(graphene.relay.ClientIDMutation):
    branch = graphene.Field(BranchNode)

    class Input:
        year = graphene.String()
        code = graphene.String()
        name = graphene.String()
        course = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        year = input.get('year')
        code = input.get('code')
        name = input.get('name')
        course = input.get('course')
        branch = Branch(name=name, )

        branch.save()
        return CreateBranch(branch=branch, year=year, code=code, course=course)


class UpdateBranch(graphene.relay.ClientIDMutation):
    branch = graphene.Field(BranchNode)

    class Input:
        id = graphene.String()
        year = graphene.String()
        code = graphene.String()
        name = graphene.String()
        course = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        year = input.get('year')
        code = input.get('code')
        name = input.get('name')
        course = input.get('course')
        branch = Branch.objects.get(pk=id)

        if year:
            branch.year = year

        if code:
            branch.code = code

        if name:
            branch.name = name

        if course:
            branch.course = course

        branch.save()
        return UpdateBranch(branch=branch)
