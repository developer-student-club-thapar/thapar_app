from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from .models import Student
from rest_framework.response import Response
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode,urlsafe_base64_decode
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework import status

# Create your views here.


"""class CreateUser(FormView):
    template_name = 'users/register.html'
    form_class = UserCreationForm
    fields = ('username', 'email', 'password1',
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
        return super().form_valid(form)"""



def activate_account(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        student = Student.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, Student.DoesNotExist):
        student = None
    print(token)

    if student is not None and str(token) == str(student.token):
        student.user.is_active = True
        student.user.save()
        return HttpResponse('Thank you for your email confirmation. Now you can login your account.')
    else:
        raise Exception('Activation link is invalid!')


class UserCreate(APIView):
    """ 
    Creates the user. 
    """

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status = status.HTTP_400_BAD_REQUEST)