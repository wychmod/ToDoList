# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import generics
from django.shortcuts import render
from .models import ToListItem
from .serializers import ToListItemSerializer


# Create your views here.
class ToListView(generics.ListAPIView):
    """
    item列表
    """

    queryset = ToListItem.objects.all().order_by("id")
    serializer_class = ToListItemSerializer


class ToListViewPriority(generics.ListAPIView):
    """
    item列表
    """

    queryset = ToListItem.objects.all().order_by("-priority")
    serializer_class = ToListItemSerializer


class ToCreateView(generics.CreateAPIView):
    """
    item创建
    """

    queryset = ToListItem.objects.all()
    serializer_class = ToListItemSerializer


class ToDeleteView(generics.DestroyAPIView):
    """
    item删除
    """

    queryset = ToListItem.objects.all()
    serializer_class = ToListItemSerializer


class ToUpdateView(generics.UpdateAPIView):
    """
    item更改
    """

    queryset = ToListItem.objects.all()
    serializer_class = ToListItemSerializer