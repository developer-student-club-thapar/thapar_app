from django.contrib import admin
from .models import Category , BuzzPost, HumansPost 
# Register your models here.
admin.site.register(Category)
admin.site.register(BuzzPost)
admin.site.register(HumansPost)
#admin.site.register(Miniblog)