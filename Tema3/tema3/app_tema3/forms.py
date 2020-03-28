from django import forms

from .models import Post, Comment


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['name', 'title', 'subtitle', 'picture', 'text']


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['name', 'text']
