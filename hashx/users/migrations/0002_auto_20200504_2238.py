# Generated by Django 3.0.5 on 2020-05-04 22:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('acad', '0003_auto_20200504_2238'),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='firstyearbatch',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='acad.FirstYearBatch'),
        ),
        migrations.AlterField(
            model_name='student',
            name='batch',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='acad.Batch'),
        ),
        migrations.AlterField(
            model_name='student',
            name='branch',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='acad.Branch'),
        ),
    ]
