# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import Student, Instructor, Verification

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'user',
        'image',
        'bio',
        'rollno',
        'branch',
        'batch',
        'firstyearbatch',
        'points',
        'gender',
        'created_date',
        'token',
    )
    list_filter = (
        'user',
        'branch',
        'batch',
        'firstyearbatch',
        'created_date',
    )
    raw_id_fields = ('starred_files',)


@admin.register(Instructor)
class InstructorAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'user',
        'course_codinator',
        'email',
        'office',
        'created_date',
    )
    list_filter = ('user', 'course_codinator', 'created_date')
    raw_id_fields = ('course',)
    search_fields = ('name',)

@admin.register(Verification)
class VerificationAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'email',
        'rollno',
    )
    search_fields = ('rollno', 'email')