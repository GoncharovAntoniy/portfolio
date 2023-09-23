from rest_framework import serializers
from .models import Projects

class ProjectsSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Projects
        fields = ["title", "code","link", "image", "cat", "user", ]