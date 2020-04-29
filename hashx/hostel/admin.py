from django.contrib import admin
from .models import Hostel, ComplaintStatus, ComplaintTypes, Complaint, MessUnit, MessUnitComment
# Register your models here.
admin.site.register(Complaint)
admin.site.register(ComplaintStatus)
admin.site.register(ComplaintTypes)
admin.site.register(Hostel)
admin.site.register(MessUnit)
admin.site.register(MessUnitComment)
