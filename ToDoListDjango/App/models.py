# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class ToListItem(models.Model):
    """
    id: this.ids++,
    text: value,
    time: (new Date()).toLocaleDateString(),
    done: 0,
    priority: priority,
    endtime: endtime,
    changeid: 0,
    """
    text = models.CharField(default="",max_length=100,verbose_name="内容")
    time = models.CharField(default="",max_length=20,verbose_name="创建时间")
    done = models.BooleanField(default=0, verbose_name="是否完成")
    priority = models.IntegerField(default=0, verbose_name="优先级")
    endtime = models.CharField(default="", max_length=20, verbose_name="时间")
    changeid = models.IntegerField(default=0, verbose_name="判断是否编辑")

    class Meta:
        db_table = "todolist_item"

    def __str__(self):
        return self.text