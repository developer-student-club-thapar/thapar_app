# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import Category, Question, Reply, Like


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'title',
        'slug',
        'description',
        'created_at',
        'updated_at',
    )
    list_filter = ('created_at', 'updated_at')
    search_fields = ('slug',)
    date_hierarchy = 'created_at'


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'category',
        'owner',
        'title',
        'file',
        'slug',
        'content',
        'created_at',
        'updated_at',
        'solved',
    )
    list_filter = (
        'category',
        'owner',
        'created_at',
        'updated_at',
        'solved',
    )
    search_fields = ('slug',)
    date_hierarchy = 'created_at'


@admin.register(Reply)
class ReplyAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'creator',
        'question',
        'content',
        'created_at',
        'updated_at',
    )
    list_filter = ('creator', 'question', 'created_at', 'updated_at')
    date_hierarchy = 'created_at'


@admin.register(Like)
class LikeAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'content_type', 'object_id')
    list_filter = ('user', 'content_type')
