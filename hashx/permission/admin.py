# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import PermiCategory, PermiStatus, Permi, SocietyPermi, GirlsPermi


# @admin.register(PermiCategory)
# class PermiCategoryAdmin(admin.ModelAdmin):
#     list_display = ('id', 'name')
#     search_fields = ('name',)


# @admin.register(PermiStatus)
# class PermiStatusAdmin(admin.ModelAdmin):
#     list_display = ('id', 'name')
#     search_fields = ('name',)


# @admin.register(Permi)
# class PermiAdmin(admin.ModelAdmin):
#     list_display = (
#         'id',
#         'in_time',
#         'out_time',
#         'date_created',
#         'status',
#         'comment',
#     )
#     list_filter = ('in_time', 'out_time', 'date_created', 'status')


# @admin.register(SocietyPermi)
# class SocietyPermiAdmin(admin.ModelAdmin):
#     list_display = (
#         'id',
#         'in_time',
#         'out_time',
#         'date_created',
#         'status',
#         'comment',
#         'room',
#         'society',
#     )
#     list_filter = (
#         'in_time',
#         'out_time',
#         'date_created',
#         'status',
#         'room',
#         'society',
#     )


# @admin.register(GirlsPermi)
# class GirlsPermiAdmin(admin.ModelAdmin):
#     list_display = (
#         'id',
#         'in_time',
#         'out_time',
#         'date_created',
#         'status',
#         'comment',
#         'room',
#         'destination',
#         'category',
#         'student',
#     )
#     list_filter = (
#         'in_time',
#         'out_time',
#         'date_created',
#         'status',
#         'room',
#         'category',
#         'student',
#     )
