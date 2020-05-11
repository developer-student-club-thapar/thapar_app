from django.contrib import admin

# Register your models here.
from .models import Member, VolunteershipApplication, VolunteershipType
admin.site.register(Member)
admin.site.register(VolunteershipApplication)
admin.site.register(VolunteershipType)
