from rest_framework import serializers
from .models import WifiCreds


class WiifCredsSearlizer(serializers.ModelSerializer):
    """ Searlizer for Wifi Credential"""

    class Meta:
        model = WifiCreds
        fields = ('id', 'networkName', 'password')
        read_only_fields = ('id', 'networkName', 'password')
