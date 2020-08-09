# -*- coding: utf-8 -*-
from django.contrib import admin
import requests
from notification.fcm import sendNotifications
from notification.email import sendEmail
from .models import Student, Instructor, Verification

def send_data(modeladmin  , request  , queryset):
    users = []
    for obj in queryset:
        users.append(obj.user)
    sendNotifications(users=users ,title='ooolalal' , body = "chaman lal" )


def send_email(modeladmin, request, queryset):
    users = []
    for obj in queryset:
        users.append(obj.user)
    sendEmail(users=users, title="oolala", body="chaman lal")


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
    # list_filter = (
    #     'user',
    #     'branch',
    #     'batch',
    #     'firstyearbatch',
    #     'created_date',
    # )
    raw_id_fields = ('starred_files',)
    actions = [send_data , send_email]


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
        'token',
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
