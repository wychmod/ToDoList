# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2019-05-10 13:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tolistitem',
            name='changeid',
            field=models.IntegerField(default=0, max_length=2, verbose_name='\u5224\u65ad\u662f\u5426\u7f16\u8f91'),
        ),
    ]
