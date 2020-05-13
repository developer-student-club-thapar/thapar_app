from .models import Complaint
from graphql_relay.node.node import from_global_id
from .schema import ComplaintNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateComplaint(graphene.relay.ClientIDMutation):
    complaint = graphene.Field(ComplaintNode)

    class Input:
        types = graphene.String()
        status = graphene.String()
        subject = graphene.String()
        description = graphene.String()
        avail_start = graphene.String()
        avail_end = graphene.String()
        comments = graphene.String()
        slug = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        types = input.get('types')
        status = input.get('status')
        subject = input.get('subject')
        description = input.get('description')
        avail_start = input.get('avail_start')
        avail_end = input.get('avail_end')
        comments = input.get('comments')
        slug = input.get('slug')
        image = info.context.FILES
        complaint = Complaint(types=types, status=status, subject=subject, description=description, avail_end=avail_end, avail_start=avail_start, comments=comments, slug=slug, image=image)

        complaint.save()
        return CreateComplaint(complaint=complaint)


class UpdateComplaint(graphene.relay.ClientIDMutation):
    complaint = graphene.Field(ComplaintNode)

    class Input:
        id = graphene.String()
        types = graphene.String()
        status = graphene.String()
        subject = graphene.String()
        description = graphene.String()
        avail_start = graphene.String()
        avail_end = graphene.String()
        comments = graphene.String()
        slug = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        types = input.get('types')
        status = input.get('status')
        subject = input.get('subject')
        description = input.get('description')
        avail_start = input.get('avail_start')
        avail_end = input.get('avail_end')
        comments = input.get('comments')
        slug = input.get('slug')
        image = info.context.FILES
        complaint = Complaint.objects.get(pk=id)

        if types:
            complaint.types = types

        if status:
            complaint.status = status

        if subject:
            complaint.subject = subject

        if description:
            complaint.description = description

        if avail_start:
            complaint.avail_start = avail_start

        if avail_end:
            complaint.avail_end = avail_end

        if comments:
            complaint.comments = comments

        if slug:
            complaint.slug = slug

        if image:
            complaint.image = image

        complaint.save()
        return UpdateComplaint(complaint=complaint)
