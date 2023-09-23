from django.db import models
from django.contrib.auth.models import User

class Projects(models.Model):
    title = models.CharField(max_length=255)
    code = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    time_create = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='backend_media', blank=True, null=True)
    cat = models.ForeignKey('Category', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Category(models.Model):
    name = models.CharField(max_length=100, db_index=True)

    def __str__(self):
        return self.name
    

