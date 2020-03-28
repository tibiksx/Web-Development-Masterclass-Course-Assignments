from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.utils import timezone

from .models import Post, Comment, Label
from .forms import PostForm, CommentForm

# Create your views here.


def add_post(request):
    if request.method == 'POST':
        labels = Label.objects.filter(id__in=request.POST.getlist('label'))
        request_form = PostForm(request.POST)
        if request_form.is_valid():
            post = Post.objects.create(
                title=request_form.cleaned_data['title'],
                subtitle=request_form.cleaned_data['subtitle'],
                name=request_form.cleaned_data['name'],
                text=request_form.cleaned_data['text'],
                picture=request_form.cleaned_data["picture"],
            )
            if labels:
                post.label_set.add(*labels)
            post.save()

    return redirect('/')


def add_comment(request):
    if request.method == 'POST':
        post = Post.objects.get(id=request.POST['post_id'])
        request_comment = CommentForm(request.POST)
        if request_comment.is_valid():
            Comment(name=request_comment.cleaned_data['name'], text=request_comment.cleaned_data['text'], post=post).save()

    return redirect('/')


def home(request):
    filter_by_label = request.GET.get('label', None)
    if filter_by_label:
        posts = Post.objects.filter(label__in=[int(filter_by_label)]).order_by('date').reverse()

    else:
        posts = Post.objects.all().order_by('date').reverse()
    labels = Label.objects.all()
    form_post = PostForm()
    form_comment = CommentForm()
    context = {
        'posts': posts,
        'labels': labels,
        'form_post': form_post,
        'form_comment': form_comment,
    }
    if filter_by_label:
        context.update({ 'selected_labels': Label.objects.filter(id=int(filter_by_label)) })
    return render(request, 'index.html', context=context)
