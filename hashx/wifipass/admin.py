# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import WifiCreds, WifiCredRecord


@admin.register(WifiCreds)
class WifiCredsAdmin(admin.ModelAdmin):
    list_display = ('id', 'networkName', 'password')


@admin.register(WifiCredRecord)
class WifiCredRecordAdmin(admin.ModelAdmin):
    list_display = ('id', 'wificred', 'longitude', 'latitute', 'date')
    list_filter = ('wificred', 'date')
