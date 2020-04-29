from django.contrib import admin
from .models import FeaturenBug, FeaturenBugCategory, FeaturenBugStatus
# Register your models here.
admin.site.register(FeaturenBug)
admin.site.register(FeaturenBugStatus)
admin.site.register(FeaturenBugCategory)
