# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import (
    Drivefolder,
    Course,
    Branch,
    FirstYearBatch,
    Batch,
    Textbook,
    FileType,
    FileTags,
    File,
    AcademicCalendar,
)


@admin.register(Drivefolder)
class DrivefolderAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "drive_id", "year", "file_name")
    search_fields = ("name",)


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
    search_fields = ("name",)


@admin.register(Branch)
class BranchAdmin(admin.ModelAdmin):
    list_display = ("id", "year", "code", "name", "created_date")
    list_filter = ("created_date",)
    raw_id_fields = ("course",)
    search_fields = ("name",)


@admin.register(FirstYearBatch)
class FirstYearBatchAdmin(admin.ModelAdmin):
    list_display = ("id", "code", "no", "GR", "created_date")
    list_filter = ("GR", "created_date")


@admin.register(Batch)
class BatchAdmin(admin.ModelAdmin):
    list_display = ("id", "branch", "num", "GR", "created_date")
    list_filter = ("branch", "GR", "created_date")


@admin.register(Textbook)
class TextbookAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "auth_name",
        "publisher",
        "course",
        "created_date",
    )
    list_filter = ("course", "created_date")
    search_fields = ("name",)


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
        # "drivefolder",
        "published",
        "admin_starred",
        "is_reviewed",
        "slug",
    )
    list_filter = (
        "type",
        "date_posted",
        # "course",
        # "branch",
        "batch",
        # "drivefolder",
        "published",
        "admin_starred",
        "is_reviewed",
    )
    raw_id_fields = ("tags",)
    search_fields = ("name", "course", "branch", "slug")
    prepopulated_fields = {"slug": ["name"]}


@admin.register(AcademicCalendar)
class AcademicCalendarAdmin(admin.ModelAdmin):
    list_display = ("id", "type", "name", "start_date", "end_date")
    list_filter = ("start_date", "end_date")
    search_fields = ("name",)
