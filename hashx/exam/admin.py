# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import ExamBase, AssesmentType, Assesment, Examination


@admin.register(ExamBase)
class ExamBaseAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'course',
        'date',
        'date_created',
        'note',
        'published',
    )
    list_filter = ('course', 'date', 'date_created', 'published')
    search_fields = ('name',)


@admin.register(AssesmentType)
class AssesmentTypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)


@admin.register(Assesment)
class AssesmentAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'course',
        'date',
        'date_created',
        'note',
        'published',
        'type',
        'batch',
        'firstyearbatch',
    )
    list_filter = (
        'course',
        'date',
        'date_created',
        'published',
        'type',
        'batch',
        'firstyearbatch',
    )
    search_fields = ('name',)


@admin.register(Examination)
class ExaminationAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'course',
        'date',
        'date_created',
        'note',
        'published',
        'type',
    )
    list_filter = ('course', 'date', 'date_created', 'published')
    search_fields = ('name',)
