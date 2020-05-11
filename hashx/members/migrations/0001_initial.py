# Generated by Django 3.0.5 on 2020-04-22 21:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    atomic = False
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='VoluteershipType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('details', models.TextField(max_length=500)),
                ('mini_logo', models.ImageField(null=True, upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='VoluteershipApplication',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('why', models.TextField(max_length=1000)),
                ('type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='members.VoluteershipType')),
            ],
        ),
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('role', models.CharField(blank=True, max_length=255)),
                ('email', models.EmailField(max_length=254)),
                ('github_url', models.URLField(blank=True)),
                ('linkedin_url', models.URLField(blank=True)),
                ('twitter_url', models.URLField(blank=True)),
                ('medium_url', models.URLField(blank=True)),
                ('dev_url', models.URLField(blank=True)),
                ('instagram_url', models.URLField(blank=True)),
                ('image', models.ImageField(blank=True, upload_to='member-profile-images/')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Member', related_query_name='Member', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
