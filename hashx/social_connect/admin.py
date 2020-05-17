# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import Facebook, Google, GitHub, Twitter


@admin.register(Facebook)
class FacebookAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'user',
        'facebook_id',
        'facebook_url',
        'first_name',
        'last_name',
        'verified',
        'name',
        'language',
        'hometown',
        'email',
        'gender',
        'dob',
        'location',
        'timezone',
        'accesstoken',
    )
    list_filter = ('user', 'dob')
    search_fields = ('name',)


@admin.register(Google)
class GoogleAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'user',
        'google_id',
        'google_url',
        'verified_email',
        'family_name',
        'name',
        'picture',
        'gender',
        'dob',
        'given_name',
        'email',
    )
    list_filter = ('user',)
    search_fields = ('name',)


@admin.register(GitHub)
class GitHubAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'user',
        'git_url',
        'git_id',
        'disk_usage',
        'private_gists',
        'public_gists',
        'public_repos',
        'hireable',
        'total_private_repos',
        'owned_private_repos',
        'following',
        'followers',
        'company',
        'name',
        'user_from',
    )
    list_filter = ('user', 'hireable', 'user_from')
    search_fields = ('name',)


@admin.register(Twitter)
class TwitterAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'user',
        'twitter_id',
        'screen_name',
        'oauth_token',
        'oauth_secret',
    )
    list_filter = ('user',)
