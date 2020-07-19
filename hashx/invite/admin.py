from django.contrib import admin
from .models import Invite

@admin.register(Invite)
class InviteAdmin(admin.ModelAdmin):
    raw_id_fields = ("invited_users",)
    list_display = ('user' , 'invite_code')