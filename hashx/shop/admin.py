# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import ShopType, Shop, ShopItem, ShopItemReview, ShopReview


@admin.register(ShopType)
class ShopTypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'type', 'image')


@admin.register(Shop)
class ShopAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'about',
        'delivery',
        'in_campus',
        'image',
        'type',
        'stars',
        'owner',
        'phone_no',
        'time_open',
        'time_close',
        'paytm_id',
        'location',
        'menu_image',
    )
    list_filter = ('delivery', 'in_campus', 'type')
    search_fields = ('name',)


@admin.register(ShopItem)
class ShopItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'shop', 'name', 'image', 'price', 'stars')
    list_filter = ('shop',)
    search_fields = ('name',)


@admin.register(ShopItemReview)
class ShopItemReviewAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'user',
        'shop_item',
        'stars',
        'review',
        'date_posted',
    )
    list_filter = ('user', 'shop_item', 'date_posted')


@admin.register(ShopReview)
class ShopReviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'shop', 'stars', 'review', 'date_posted')
    list_filter = ('user', 'shop', 'date_posted')
