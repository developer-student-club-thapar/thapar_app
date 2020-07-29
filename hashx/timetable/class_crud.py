from .models import Class
from graphql_relay.node.node import from_global_id
from .schema import ClassNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateClass(graphene.relay.ClientIDMutation):
    classes = graphene.Field(ClassNode)

    class Input:
        type = graphene.String()
        course = graphene.String()
        created_date = graphene.types.datetime.DateTime()
        modified_date = graphene.types.datetime.DateTime()
        day = graphene.types.datetime.Date()
        start_time = graphene.types.datetime.Time()
        end_time = graphene.types.datetime.Time()
        location = graphene.String()
        published = graphene.Boolean()
        private = graphene.Boolean()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        type = input.get('type')
        course = input.get('course')
        created_date = input.get('created_date')
        modified_date = input.get('modified_date')
        day = input.get('day')
        start_time = input.get('start_time')
        end_time = input.get('end_time')
        location = input.get('location')
        published = input.get('published')
        private = input.get('private')
        classes = Class(type=type, course=course, created_date=created_date, modified_date=modified_date,
                        day=day, start_time=start_time, end_time=end_time, location=location, private=private, published=published)
        classes.save()
        return CreateClass(classes=classes)


class UpdateClass(graphene.relay.ClientIDMutation):
    classes = graphene.Field(ClassNode)

    class Input:
        id = graphene.String()
        type = graphene.String()
        course = graphene.String()
        created_date = graphene.types.datetime.DateTime()
        modified_date = graphene.types.datetime.DateTime()
        day = graphene.types.datetime.Date()
        start_time = graphene.types.datetime.Time()
        end_time = graphene.types.datetime.Time()
        location = graphene.String()
        published = graphene.Boolean()
        private = graphene.Boolean()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        classes = Class.objects.get(pk=id)
        type = input.get('type')
        course = input.get('course')
        created_date = input.get('created_date')
        modified_date = input.get('modified_date')
        day = input.get('day')
        start_time = input.get('start_time')
        end_time = input.get('end_time')
        location = input.get('location')
        published = input.get('published')
        private = input.get('private')
        if type:
            classes.type = type
        if course:
            classes.course = course
        if created_date:
            classes.created_date = created_date
        if modified_date:
            classes.modified_date = modified_date
        if day:
            classes.day = day
        if start_time:
            classes.start_time = start_time
        if end_time:
            classes.end_time = end_time
        if private:
            classes.private = private
        if published:
            classes.published = published
        if location:
            classes.location = location
        classes.save()
        return UpdateClass(classes=classes)
