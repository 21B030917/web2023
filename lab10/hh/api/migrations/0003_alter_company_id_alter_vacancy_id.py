# Generated by Django 4.1.7 on 2023-04-13 13:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_vacancy_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]