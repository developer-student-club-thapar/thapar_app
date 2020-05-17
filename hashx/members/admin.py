# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import Member, VolunteershipType, VolunteershipApplication


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'user',
        'role',
        'email',
        'github_url',
        'linkedin_url',
        'twitter_url',
        'medium_url',
        'dev_url',
        'instagram_url',
        'image',
    )
    list_filter = ('user',)
    search_fields = ('name',)


@admin.register(VolunteershipType)
class VolunteershipTypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'details', 'mini_logo')
    search_fields = ('name',)


@admin.register(VolunteershipApplication)
class VolunteershipApplicationAdmin(admin.ModelAdmin):
    list_display = ('id', 'type', 'why')
    list_filter = ('type',)
