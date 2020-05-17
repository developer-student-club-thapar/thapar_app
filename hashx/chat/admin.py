# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import ChatRoom, Message


@admin.register(ChatRoom)
class ChatRoomAdmin(admin.ModelAdmin):
    list_display = ('id', 'type', 'time_created', 'name')
    list_filter = ('time_created',)
    raw_id_fields = ('participants',)
    search_fields = ('name',)


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'type',
        'content',
        'media',
        'from_user',
        'date_created',
        'room',
    )
    list_filter = ('from_user', 'date_created', 'room')
    raw_id_fields = ('delivered_user', 'seen_user')
