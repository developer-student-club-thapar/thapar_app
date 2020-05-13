from django.contrib import admin

# Register your models here.
from .models import Drivefolder, Course, Branch, Batch, Textbook, FirstYearBatch, File, AcademicCalendar

admin.site.register(Drivefolder)
admin.site.register(Course)
admin.site.register(Branch)
admin.site.register(Batch)
admin.site.register(Textbook)
admin.site.register(FirstYearBatch)
admin.site.register(File)
admin.site.register(AcademicCalendar)

