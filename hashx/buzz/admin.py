# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import Category, HumansPost, Miniblog, BuzzPost, Miniblogreview, BuzzPostReview


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'created', 'public')
    list_filter = ('created', 'public')
    search_fields = ('name',)


@admin.register(HumansPost)
class HumansPostAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'content',
        'date_posted',
        'image',
        'person_name',
        'person_detail',
        'slug',
    )
    list_filter = ('date_posted',)
    search_fields = ('name', 'slug')
    prepopulated_fields = {'slug': ['name']}


@admin.register(Miniblog)
class MiniblogAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'about',
        'date_created',
        'header_image',
        'verified',
        'points',
    )
    list_filter = ('date_created', 'verified')
    search_fields = ('name',)


@admin.register(BuzzPost)
class BuzzPostAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'title',
        'content',
        'date_posted',
        'image',
        'slug',
        'miniblog',
        'published',
        'is_reviewed',
        'editors_choice',
    )
    list_filter = (
        'date_posted',
        'miniblog',
        'published',
        'is_reviewed',
        'editors_choice',
    )
    raw_id_fields = ('category',)
    search_fields = ('slug',)


@admin.register(Miniblogreview)
class MiniblogreviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'status', 'miniblog', 'date', 'comment', 'user')
    list_filter = ('status', 'miniblog', 'date', 'user')


@admin.register(BuzzPostReview)
class BuzzPostReviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'status', 'buzzpost', 'date', 'comment', 'user')
    list_filter = ('status', 'buzzpost', 'date', 'user')
