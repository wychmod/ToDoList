"""ToDoList URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from App.views import ToListView,ToCreateView,ToDeleteView,ToUpdateView,ToListViewPriority

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    url(r'tolist/$', ToListView.as_view(), name='todoitem_list'),

    url(r'tolistp/$', ToListViewPriority.as_view(), name='todoitem_Plist'),

    url(r'tocreate/$', ToCreateView.as_view(), name='todoitem_create'),

    url(r'todelete/(?P<pk>\d+)/$', ToDeleteView.as_view(), name='todoitem_delete'),

    url(r'toupdate/(?P<pk>\d+)/$', ToUpdateView.as_view(), name='todoitem_update'),
]
