# Generated by Django 3.0.4 on 2020-03-27 00:02

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('app_tema3', '0005_auto_20200326_1418'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 3, 27, 0, 2, 27, 660938, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='post',
            name='subtitle',
            field=models.CharField(default=datetime.datetime(2020, 3, 27, 0, 2, 27, 661171, tzinfo=utc), max_length=100),
        ),
    ]
