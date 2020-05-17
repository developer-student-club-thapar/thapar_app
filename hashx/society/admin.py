# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import Society, Event


@admin.register(Society)
class SocietyAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'category',
        'about',
        'student_head',
        'site_link',
        'logo',
        'image',
        'user',
    )
    list_filter = ('user',)
    search_fields = ('name',)


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'title',
        'content',
        'date_posted',
        'date_modified',
        'start_time',
        'end_time',
        'place',
        'inCampus',
        'location',
        'location_url',
        'poster_image',
        'external_link',
        'society',
    )
    list_filter = (
        'date_posted',
        'date_modified',
        'start_time',
        'end_time',
        'place',
        'inCampus',
        'society',
    )
