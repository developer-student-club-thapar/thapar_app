import graphene
from graphene_django.types import DjangoObjectType
from .models import WifiCreds


class WifiCredType(DjangoObjectType):
    class Meta:
        model = WifiCreds


class Query(object):

    wificreds = graphene.Field(
        WifiCredType,
        id=graphene.Int(),
        networkName=graphene.String()
    )

    all_wificreds = graphene.List(WifiCredType)

    def resolve_all_wificreds(self, info, **kwargs):
        return WifiCreds.objects.all()

    def resolve_wificred(self, info, **kwargs):
        id = kwargs.get('id')
        networkName: kwargs.get('networkName')

        if id is not None:
            return WifiCreds.objects.get(pk=id)

        if networkName is not None:
            return WifiCreds.objects.get(networkName=networkName)
