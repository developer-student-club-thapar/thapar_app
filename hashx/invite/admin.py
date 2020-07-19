# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import Invite


@admin.register(Invite)
class InviteAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'user',
        'invite_code',
        'can_invite',
        'created_date',
    )
    list_filter = ('user', 'can_invite', 'created_date')
    raw_id_fields = ('invited_users',)
