from .models import Drivefolder
from graphql_relay.node.node import from_global_id
from .schema import DrivefolderNode
import graphene
from graphene_django.types import DjangoObjectType


class CreateDrivefolder(graphene.relay.ClientIDMutation):
    drivefolder = graphene.Field(DrivefolderNode)
    
    class Input:
        name = graphene.String()
        drive_id = graphene.String()
        year = graphene.Int()
        file_name = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        name = input.get('name')
        drive_id = input.get('drive_id')
        year = input.get('year')
        file_name = input.get('file_name')
        drivefolder = Drivefolder(name=name, drive_id=drive_id, year=year, file_name=file_name)

        drivefolder.save()
        return CreateDrivefolder(drivefolder=drivefolder)


class UpdateDrivefolder(graphene.relay.ClientIDMutation):
    drivefolder = graphene.Field(DrivefolderNode)
    
    class Input:
        id = graphene.String()
        name = graphene.String()
        drive_id = graphene.String()
        year = graphene.Int()
        file_name = graphene.String()

    @classmethod
    def mutate_and_get_payload(cls,root, info, **input):
        id = input.get('id')
        id = from_global_id(id)
        id = id[1]
        name = input.get('name')
        drive_id = input.get('drive_id')
        year = input.get('year')
        file_name = input.get('file_name')
        drivefolder = Drivefolder.objects.get(pk=id)

        if name:
            drivefolder.name = name

        if drive_id:
            drivefolder.drive_id = drive_id

        if year:
            drivefolder.year = year

        if file_name:
            drivefolder.file_name = file_name
    
        drivefolder.save()
        return UpdateDrivefolder(drivefolder=drivefolder)