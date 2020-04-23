from django.contrib import admin

# Register your models here.
from .models import Member, VoluteershipApplication, VoluteershipType
admin.site.register(Member)
admin.site.register(VoluteershipApplication)
admin.site.register(VoluteershipType)
