# Generated by Django 3.0.5 on 2020-07-06 14:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('acad', '0010_auto_20200625_1754'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='file',
            name='drivefolder',
        ),
        migrations.AlterUniqueTogether(
            name='branch',
            unique_together={('code', 'year')},
        ),
        migrations.AlterUniqueTogether(
            name='drivefolder',
            unique_together={('year', 'drive_id')},
        ),
        migrations.AlterUniqueTogether(
            name='course',
            unique_together={('name', 'code')},
        ),
    ]