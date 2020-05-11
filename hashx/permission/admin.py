from django.contrib import admin
from .models import PermiCategory, PermiStatus, GirlsPermi, SocietyPermi
# Register your models here.
admin.site.register(PermiCategory)
admin.site.register(PermiStatus)
admin.site.register(GirlsPermi)
admin.site.register(SocietyPermi)
