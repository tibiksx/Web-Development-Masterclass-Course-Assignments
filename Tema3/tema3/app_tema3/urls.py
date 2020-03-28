from django.urls import path

from .views import home
from .views import add_comment
from .views import add_post

urlpatterns = [
    path('', home),
    path('add-comment', add_comment),
    path('add-post', add_post),
]
