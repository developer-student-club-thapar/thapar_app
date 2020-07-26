# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import Snippet, Collaborators


@admin.register(Snippet)
class SnippetAdmin(admin.ModelAdmin):
    list_display = ('id', 'text')


@admin.register(Collaborators)
class CollaboratorsAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'image', 'link', 'date_created')
    list_filter = ('date_created',)
    search_fields = ('name',)
