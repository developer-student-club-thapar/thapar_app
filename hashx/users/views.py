from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from .models import Student
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import CreateView
from django.views.generic.edit import FormView


# Create your views here.


class CreateUser(FormView):
    template_name = 'users/register.html'
    form_class = UserCreationForm
    fields = ('username', 'email','first_name' ,'last_name', 'password1',
                  'password2')
    success_url = 'create_profile'
    context_object_name  = 'form'


    def form_valid(self , form):
        form.save()
        username  = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password1')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(self.request , user  , backend ='django.contrib.auth.backends.ModelBackend')
            print(user)
            return super().form_valid(form)
        raise Exception('no user found')


class CreateStudent(CreateView):
    model = Student
    fields = ['rollno' ,'batch' , 'branch' ,'gender', 'image' , 'bio' ]
    success_url  = 'profile'
    template_name = 'users/register.html'
    context_object_name  = 'register_form'

    def form_valid(self , form):
        form.instance.user = self.request.user
        return super().form_valid(form)

