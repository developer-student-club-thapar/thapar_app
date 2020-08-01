# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import Location, Period, OnlineClass, OfflineClass, Holidays


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
    search_fields = ['building', 'floor']


@admin.register(Period)
class PeriodAdmin(admin.ModelAdmin):
    list_display = ('id', 'semester', 'no', 'start_time', 'end_time')
    list_filter = ('semester',)
    search_fields = ('semester', 'no', 'start_time', 'end_time')


@admin.register(OnlineClass)
class OnlineClassAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'time',
        'batches',
        'day',
        'type',
        'course',
        'meetingURL',
        'published'
    )

    list_filter = (
        'course',
        'created_date',
        'modified_date',
        'published',
        'private',
        'isCompleted',
    )
    fields = ('type', 'day', 'course', 'batch', 'period', 'meetingURL')
    autocomplete_fields = ["course", ]
    readonly_fields = ('id', 'private', 'published',
                       'isCompleted', 'recordingURL', 'created_date', 'modified_date')


@admin.register(OfflineClass)
class OfflineClassAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'type',
        'created_date',
        'modified_date',
        'course',
        'day',
        'published',
        'private',
        'location',
    )
    list_filter = (
        'created_date',
        'modified_date',
        'course',
        'published',
        'private',
        'location',
    )
    raw_id_fields = ('batch', 'period')
    autocomplete_fields = ["course"]


@admin.register(Holidays)
class HolidaysAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'date')
    list_filter = ('date',)
    search_fields = ('name',)
