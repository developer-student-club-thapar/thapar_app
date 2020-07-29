# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import Location, Period, Holidays,


@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'building',
        'room',
        'floor',
        'published',
        'longitude',
        'latitude',
        'location_url',
    )
    list_filter = ('published',)


@admin.register(Period)
class PeriodAdmin(admin.ModelAdmin):
    list_display = ('id', 'semester', 'no', 'start_time', 'end_time')
    list_filter = ('semester',)


@admin.register(Holidays)
class HolidaysAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'date')
    list_filter = ('date',)
    search_fields = ('name',)
