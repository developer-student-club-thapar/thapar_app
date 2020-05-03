from django.contrib import admin

# Register your models here.
from .models import FeaturenBug, FeaturenBugCategory, FeaturenBugStatus
admin.site.register(FeaturenBug)
admin.site.register(FeaturenBugCategory)
admin.site.register(FeaturenBugStatus)
