from django.db import models

from django.utils import timezone

# Create your models here.


class Post(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateTimeField(default=timezone.now)
    name = models.CharField(max_length=25, default='The Blond User')
    title = models.CharField(max_length=120, blank=True)
    subtitle = models.CharField(max_length=100, default=timezone.now)
    picture = models.CharField(max_length=255)
    text = models.TextField()

    def __str__(self):
        return ''.join([str(self.title) + ' <<== ' + str(self.name)])


class Label(models.Model):
    id = models.AutoField(primary_key=True)
    post = models.ManyToManyField(Post, blank=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return ''.join(str(self.name))


class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=25, default='The Blond User')
    post = models.ForeignKey(Post, on_delete=models.deletion.CASCADE)
    text = models.TextField()
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return ''.join([str(self.text) + " @@@@ " + str(self.name)])
