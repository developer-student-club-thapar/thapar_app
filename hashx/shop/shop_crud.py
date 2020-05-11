from .models import Shop
from graphql_relay.node.node import from_global_id
from .schema import ShopNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateShop(graphene.relay.ClientIDMutation):
    shop = graphene.Field(ShopNode)
    
    class Input:
        name = graphene.String()
        about = graphene.String()
        owner = graphene.String()
        phone_no = graphene.String()
        time_open = graphene.types.datetime.Time()
        delivery = graphene.Boolean()
        in_campus = graphene.Boolean()
        stars = graphene.Float()
        time_close = graphene.types.datetime.Time()
        paytm_id = graphene.String()
        location = graphene.String()
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        name = input.get('name')
        about = input.get('about')
        delivery = input.get('delivery')
        in_campus = input.get('in_campus')
        type = input.get('type')
        stars = input.get('stars')
        owner = input.get('owner')
        phone_no = input.get('phone_no')
        time_open = input.get('time_open')
        time_close = input.get('time_close')
        paytm_id = input.get('paytm_id')
        location = input.get('location')
        image = info.context.FILES['image']
        menu_image = info.context.FILES['menu_image']
        shop = Shop(name=name,about=about , delivery=delivery , in_campus=in_campus,stars=stars,owner=owner,phone_no=phone_no,time_open=time_open,time_close=time_close,paytm_id=paytm_id,location=location)
        shop.save()
        if menu_image:
            shop.menu_image = menu_image
        if image:
            shop.image = image
        
        shop.save()
        return CreateShop(shop=shop)


class UpdateShop(graphene.relay.ClientIDMutation):
    shop = graphene.Field(ShopNode)
    
    class Input:
        id = graphene.String()
        name = graphene.String()
        about = graphene.String()
        owner = graphene.String()
        phone_no = graphene.String()
        time_open = graphene.types.datetime.Time()
        delivery = graphene.Boolean()
        in_campus = graphene.Boolean()
        stars = graphene.Float()
        time_close = graphene.types.datetime.Time()
        paytm_id = graphene.String()
        location = graphene.String()
    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        name = input.get('name')
        about = input.get('about')
        delivery = input.get('delivery')
        in_campus = input.get('in_campus')
        type = input.get('type')
        stars = input.get('stars')
        owner = input.get('owner')
        phone_no = input.get('phone_no')
        time_open = input.get('time_open')
        time_close = input.get('time_close')
        paytm_id = input.get('paytm_id')
        location = input.get('location')
        image = info.context.FILES['image']
        menu_image = info.context.FILES['menu_image']
        shop = Shop.objects.get(pk=id)
        if name:
            shop.name = name
        if about:
            shop.about = about
        if delivery:
            shop.delivery = delivery
        if in_campus:
            shop.in_campus = in_campus
        if stars:
            shop.stars = stars
        if type:
            shop.type = type
        if owner:
            shop.owner = owner
        if image:
            shop.image = image
        if phone_no:
            shop.phone_no = phone_no
        if time_open:
            shop.time_open = time_open
        if time_close:
            shop.time_close = time_close
        if menu_image:
            shop.menu_image = menu_image
        if paytm_id:
            shop.paytm_id = paytm_id
        if location:
            shop.location = location
        
        shop.save()
        return UpdateShop(shop=shop)



        
        
