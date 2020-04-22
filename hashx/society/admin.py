from django.contrib import admin

# Register your models here.
from .models import Society, Event

admin.site.register(Society)
admin.site.register(Event)
