from django.contrib import admin
from .models import Item, ItemCategory, ItemStatus
# Register your models here.
admin.site.register(Item)
admin.site.register(ItemCategory)
admin.site.register(ItemStatus)
