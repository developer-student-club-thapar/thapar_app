# Generated by Django 3.0.5 on 2020-07-18 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hostel', '0002_auto_20200718_1259'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hostel',
            name='caretaker_contact',
            field=models.CharField(help_text='Contact phone number', max_length=15),
        ),
    ]
