# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import ItemCategory, ItemStatus, Item


@admin.register(ItemCategory)
class ItemCategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)


@admin.register(ItemStatus)
class ItemStatusAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'type',
        'details',
        'image',
        'category',
        'status',
        'user',
        'contact_details',
        'date_posted',
        'is_reviewed',
        'published',
    )
    list_filter = (
        'category',
        'status',
        'user',
        'date_posted',
        'is_reviewed',
        'published',
    )
    search_fields = ('name',)
