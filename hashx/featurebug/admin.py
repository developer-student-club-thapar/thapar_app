# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import FeaturenBugCategory, FeaturenBugStatus, FeaturenBug


@admin.register(FeaturenBugCategory)
class FeaturenBugCategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)


@admin.register(FeaturenBugStatus)
class FeaturenBugStatusAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)


@admin.register(FeaturenBug)
class FeaturenBugAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'type',
        'category',
        'status',
        'title',
        'text',
        'user',
        'image',
        'date_posted',
        'slug',
    )
    list_filter = ('category', 'status', 'user', 'date_posted')
    search_fields = ('slug',)
