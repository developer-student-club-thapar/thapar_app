# Generated by Django 3.0.5 on 2020-05-09 10:00

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('acad', '0005_auto_20200505_0229'),
        ('exam', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AssesmentType',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=128)),
            ],
        ),
        migrations.CreateModel(
            name='ExamBase',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=128)),
                ('date', models.DateTimeField()),
                ('date_created', models.DateTimeField(default=django.utils.timezone.now, editable=False)),
                ('note', models.TextField(max_length=500)),
                ('published', models.BooleanField(default=True)),
                ('course', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='acad.Course')),
            ],
        ),
        migrations.CreateModel(
            name='Assesment',
            fields=[
                ('exambase_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='exam.ExamBase')),
                ('batch', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='acad.Batch')),
                ('firstyearbatch', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='acad.FirstYearBatch')),
                ('type', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='exam.AssesmentType')),
            ],
            bases=('exam.exambase',),
        ),
        migrations.CreateModel(
            name='Examination',
            fields=[
                ('exambase_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='exam.ExamBase')),
                ('type', models.CharField(choices=[('MST', 'Mid Semester Examination'), ('EST', 'End Semster Examination')], max_length=25)),
            ],
            bases=('exam.exambase',),
        ),
        migrations.DeleteModel(
            name='Exam',
        ),
    ]
