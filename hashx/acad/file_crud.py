from .models import File
from graphql_relay.node.node import from_global_id
from .schema import FileNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateFile(graphene.relay.ClientIDMutation):
    file = graphene.Field(FileNode)

    class Input:
        type = graphene.String()
        tags = graphene.String()
        name = graphene.String()
        about = graphene.String()
        user = graphene.String()
        course = graphene.String()
        branch = graphene.String()
        batch = graphene.String()
        drivefolder = graphene.String()
        published = graphene.Boolean()
        admin_starred = graphene.Boolean()
        is_reviewed = graphene.Boolean()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        type = input.get('type')
        tags = input.get('tags')
        name = input.get('name')
        about = input.get('about')
        user = input.get('user')
        course = input.get('course')
        branch = input.get('branch')
        batch = input.get('batch')
        drivefolder = input.get('drivefolder')
        published = input.get('published')
        admin_starred = input.get('admin_starred')
        is_reviewed = input.get('is_reviewed')
        file = File(name=name, )

        file.save()
        return CreateFile(file=file)


class UpdateFile(graphene.relay.ClientIDMutation):
    file = graphene.Field(FileNode)

    class Input:
        id = graphene.String()
        type = graphene.String()
        tags = graphene.String()
        name = graphene.String()
        about = graphene.String()
        user = graphene.String()
        course = graphene.String()
        branch = graphene.String()
        batch = graphene.String()
        drivefolder = graphene.String()
        published = graphene.Boolean()
        admin_starred = graphene.Boolean()
        is_reviewed = graphene.Boolean()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        type = input.get('type')
        tags = input.get('tags')
        name = input.get('name')
        about = input.get('about')
        user = input.get('user')
        course = input.get('course')
        branch = input.get('branch')
        batch = input.get('batch')
        drivefolder = input.get('drivefolder')
        published = input.get('published')
        admin_starred = input.get('admin_starred')
        is_reviewed = input.get('is_reviewed')
        file = File.objects.get(pk=id)

        if type:
            file.type = type

        if tags:
            file.tags = tags

        if name:
            file.name = name

        if about:
            file.about = about

        if user:
            file.user = user

        if course:
            file.course = course

        if branch:
            file.branch = branch

        if batch:
            file.batch = batch

        if drivefolder:
            file.drivefolder = drivefolder

        if published:
            file.published = published

        if admin_starred:
            file.admin_starred = admin_starred

        if is_reviewed:
            file.is_reviewed = is_reviewed

        file.save()
        return UpdateFile(file=file)
