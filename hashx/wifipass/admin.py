from django.contrib import admin
from .models import WifiCreds, WifiCredRecord
# Register your models here.

admin.site.register(WifiCreds)
admin.site.register(WifiCredRecord)
