# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import Hostel, ComplaintTypes, ComplaintStatus, Complaint, MessUnit, MessUnitComment, Room


@admin.register(Hostel)
class HostelAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'about',
        'discussion',
        'warden_name',
        'caretaker_name',
        'caretaker_contact',
        'capacity',
        'slug',
        'image',
        'user',
        'b_start',
        'b_end',
        'l_start',
        'l_end',
        'd_start',
        'd_end',
    )
    list_filter = ('discussion', 'user')
    search_fields = ('name', 'slug')
    prepopulated_fields = {'slug': ['name']}


@admin.register(ComplaintTypes)
class ComplaintTypesAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)


@admin.register(ComplaintStatus)
class ComplaintStatusAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)


@admin.register(Complaint)
class ComplaintAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'types',
        'status',
        'subject',
        'description',
        'image',
        'avail_start',
        'avail_end',
        'date_posted',
        'comments',
        'user',
        'slug',
    )
    list_filter = ('types', 'status', 'date_posted', 'user')
    search_fields = ('slug',)


@admin.register(MessUnit)
class MessUnitAdmin(admin.ModelAdmin):
    list_display = ('id', 'mess', 'day', 'type', 'food', 'image', 'slug')
    list_filter = ('mess',)
    search_fields = ('slug',)


@admin.register(MessUnitComment)
class MessUnitCommentAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'messunit',
        'stars',
        'comment',
        'date_posted',
        'user',
    )
    list_filter = ('messunit', 'date_posted', 'user')


@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ('id', 'hostel', 'wing', 'num')
    list_filter = ('hostel',)
