from django.db import models
from django.contrib.contenttypes.fields import (GenericForeignKey,
                                                GenericRelation)
from django.contrib.contenttypes.models import ContentType
from django.contrib.auth.models import User
from django.conf import settings
import uuid
from django.utils import timezone
from django.urls import reverse
from django.utils.text import slugify
from acad.models import File
id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)


class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=150, unique=True)
    slug = models.SlugField(max_length=150, unique=True, editable=False)
    description = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('category', kwargs={'slug': self.slug})

    def save(self, *args, **kwargs):
        if not self.pk:
            self.slug = slugify(self.title)

        super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = "Categories"


class Question(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name='questions')
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='questions')
    title = models.CharField(max_length=150, unique=True)
    file = models.ForeignKey(
        File, on_delete=models.SET_NULL, null=True, blank=True)
    slug = models.SlugField(max_length=150, unique=True, editable=False)
    content = models.TextField(max_length=50000, blank=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    solved = models.BooleanField(default=False)
    likes = GenericRelation('Like')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('question', kwargs={'slug': self.slug})

    def save(self, *args, **kwargs):
        if not self.pk:
            self.slug = slugify(self.title)

        super().save(*args, **kwargs)

    def like(self, user):
        return self.likes.create(user=user)

    def dislike(self, user):
        return self.likes.filter(user=user).delete()

    def is_liked_by(self, user):
        liked_list = self.likes.values_list('user__id', flat=True)
        return user.id in liked_list

    class Meta:
        get_latest_by = "-pk"


class Reply(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(
        Question, on_delete=models.CASCADE, related_name='replies')
    content = models.TextField(max_length=30000, blank=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    likes = GenericRelation('Like')

    def __str__(self):
        return "{0} replied to {1}".format(self.creator.username, self.question.title)

    def like(self, user):
        return self.likes.create(user=user)

    def dislike(self, user):
        return self.likes.filter(user=user).delete()

    def is_liked_by(self, user):
        liked_list = self.likes.values_list('user__id', flat=True)
        return user.id in liked_list

    class Meta:
        verbose_name_plural = "Replies"


class Like(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')
