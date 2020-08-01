# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import Snippet


@admin.register(Snippet)
class SnippetAdmin(admin.ModelAdmin):
    list_display = ('id', 'text')
