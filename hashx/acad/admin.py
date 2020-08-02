# -*- coding: utf-8 -*-
import requests
from django.contrib import admin


def add_url(modeladmin, request, queryset):
    for obj in queryset:
        obj.amazon_url = obj.file.url
        obj.save()


from .models import (
    Course,
    Branch,
    FirstYearBatch,
    Batch,
    FileType,
    FileTags,
    File,
    AcademicCalendar,
    Department,
    Semester,
)


@admin.register(Semester)
class SemesterAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'start', 'end', 'status')
    search_fields = ('name', 'start', 'end', 'status')


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "code",
        "course_site",
        "credit",
        "l",
        "t",
        "p",
        "mst",
        "tut_ses",
        "lab_proj",
        "quiz",
        "est",
        "created_date",
        "syllabus",
    )
    list_filter = ("created_date",)
    search_fields = ("name", "code", "syllabus")


@admin.register(Branch)
class BranchAdmin(admin.ModelAdmin):
    list_display = ("id", "year", "code", "name", "created_date", "batch_of")
    list_filter = ("created_date",)
    autocomplete_field = ("course")
    search_fields = ("name", "code", "year", "batch_of")


@admin.register(FirstYearBatch)
class FirstYearBatchAdmin(admin.ModelAdmin):
    list_display = ("id", "code", "no", "GR", "created_date")
    list_filter = ("GR", "code", "no", "created_date")


@admin.register(Batch)
class BatchAdmin(admin.ModelAdmin):
    list_display = ("id", "branch", "num", "GR", "created_date")
    list_filter = ("branch", "GR", "created_date")
    search_fields = ("branch", "num",)
    autocomplete_field = ("branch")


@admin.register(FileType)
class FileTypeAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ("name",)


@admin.register(FileTags)
class FileTagsAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ("name",)


@admin.register(File)
class FileAdmin(admin.ModelAdmin):
    list_display = (
        "type",
        "is_downloaded",
        "file",
        "web_content_link",
        "thumbnail_image",
        "date_posted",
        "name",
        "about",
        "user",
        "course",
        "branch",
        "batch",
        "published",
        "admin_starred",
        "is_reviewed",
        "slug",
    )
    list_filter = (
        "type",
        "date_posted",
        "published",
        "admin_starred",
        "is_reviewed",
        "is_downloaded"
    )
    autocomplete_fields = ("tags", "batch", "user")
    search_fields = ("file", "web_content_link", "name")
    prepopulated_fields = {"slug": ["name"]}
    actions = [add_url]


@admin.register(AcademicCalendar)
class AcademicCalendarAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "start_date", "end_date")
    list_filter = ("start_date", "end_date")
    search_fields = ("name",)


@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ("name",)
