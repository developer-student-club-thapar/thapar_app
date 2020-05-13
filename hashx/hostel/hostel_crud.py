from .models import Hostel
from graphql_relay.node.node import from_global_id
from .schema import HostelNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateHostel(graphene.relay.ClientIDMutation):
    hostel = graphene.Field(HostelNode)

    class Input:
        name = graphene.String()
        about = graphene.String()
        discussion = graphene.String()
        warden_name = graphene.String()
        caretaker_name = graphene.String()
        caretaker_contact = graphene.String()
        capacity = graphene.Int()
        b_start = graphene.String()
        b_end = graphene.String()
        l_start = graphene.String()
        l_end = graphene.String()
        d_start = graphene.String()
        d_end = graphene.String()
        slug = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        name = input.get('name')
        about = input.get('about')
        discussion = input.get('discussion')
        warden_name = input.get('warden_name')
        caretaker_name = input.get('caretaker_name')
        caretaker_contact = input.get('caretaker_contact')
        capacity = input.get('capacity')
        b_start = input.get('b_start')
        b_end = input.get('b_end')
        l_start = input.get('l_start')
        l_end = input.get('l_end')
        d_start = input.get('d_start')
        d_end = input.get('d_end')
        slug = input.get('slug')
        image = info.context.FILES
        hostel = Hostel(name=name, about=about, discussion=discussion, warden_name=warden_name, caretaker_contact=caretaker_contact, caretaker_name=caretaker_name, capacity=capacity, b_start=b_start, b_end=b_end, l_start=l_start, l_end=l_end, d_end=d_end, d_start=d_start, slug=slug, image=image)

        hostel.save()
        return CreateHostel(hostel=hostel)


class UpdateHostel(graphene.relay.ClientIDMutation):
    hostel = graphene.Field(HostelNode)

    class Input:
        id = graphene.String()
        name = graphene.String()
        about = graphene.String()
        discussion = graphene.String()
        warden_name = graphene.String()
        caretaker_name = graphene.String()
        caretaker_contact = graphene.String()
        capacity = graphene.Int()
        b_start = graphene.String()
        b_end = graphene.String()
        l_start = graphene.String()
        l_end = graphene.String()
        d_start = graphene.String()
        d_end = graphene.String()
        slug = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        name = input.get('name')
        about = input.get('about')
        discussion = input.get('discussion')
        warden_name = input.get('warden_name')
        caretaker_name = input.get('caretaker_name')
        caretaker_contact = input.get('caretaker_contact')
        capacity = input.get('capacity')
        b_start = input.get('b_start')
        b_end = input.get('b_end')
        l_start = input.get('l_start')
        l_end = input.get('l_end')
        d_start = input.get('d_start')
        d_end = input.get('d_end')
        slug = input.get('slug')
        image = info.context.FILES
        hostel = Hostel.objects.get(pk=id)

        if name:
            hostel.name = name

        if about:
            hostel.about = about

        if discussion:
            hostel.discussion = discussion

        if warden_name:
            hostel.warden_name = warden_name

        if caretaker_name:
            hostel.caretaker_name = caretaker_name

        if caretaker_contact:
            hostel.caretaker_contact = caretaker_contact

        if capacity:
            hostel.capacity = capacity

        if b_start:
            hostel.b_start = b_start

        if b_end:
            hostel.b_end = b_end

        if l_start:
            hostel.l_start = l_start

        if l_end:
            hostel.l_end = l_end

        if d_start:
            hostel.d_start = d_start

        if d_end:
            hostel.d_end = d_end

        if slug:
            hostel.slug = slug

        if image:
            hostel.image = image

        hostel.save()
        return UpdateHostel(hostel=hostel)
