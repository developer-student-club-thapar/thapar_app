from django.contrib import admin
from .models import GitHub, Google, Twitter, Facebook
# Register your models here.
admin.site.register(GitHub)
admin.site.register(Twitter)
admin.site.register(Facebook)
admin.site.register(Google)
