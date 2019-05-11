from rest_framework import serializers
from App.models import ToListItem


class ToListItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToListItem
        fields = "__all__"
