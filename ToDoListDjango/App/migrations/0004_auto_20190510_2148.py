# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2019-05-10 13:48
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0003_auto_20190510_2137'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tolistitem',
            old_name='begintime',
            new_name='time',
        ),
    ]
