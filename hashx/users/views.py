from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Student, Instructor
from rest_framework.response import Response
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework import status
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import render
from django.contrib import messages
from .forms import RegisterForm, LoginForm
# Create your views here.


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
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def homepage(request):
    context = {
        "title": "Homepage"
    }
    return render(request, 'users/home.html', context)


def loginpage(request):
    form = LoginForm()
    context = {
        "title": "Login",
        "form": LoginForm
    }
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(username=email, password=password)
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return render(request, 'acad/homepage.html')
            else:
                messages.error(request, 'Username or Password is Incorrect')
                render(request, 'users/login.html', context)

    return render(request, 'users/login.html', context)


def signuppage(request):
    form = RegisterForm()
    context = {
        "title": "Register",
        "form": RegisterForm
    }
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            email = request.POST.get('email')
            password1 = request.POST.get('password1')
            password2 = request.POST.get('password2')
            if password1 != password2:
                messages.danger('Passwords Do not match')
                return render(request, 'users/register.html', context)
            instructor = Instructor.objects.get(email=email)
            if instructor:
                username = email.replace("@thapar.edu", '')
                new_user = User.objects.create_user(
                    username=username, email=email, password=password1, first_name=instructor.name)
                instructor.user = new_user
                iname = instructor.name
                instructor.save()
                messages.success(
                    request, f' Welcome { iname } , Please Check your email ')
                messages.success(
                    request, f' You Username is { username }, It will be required while logging in ')
                return HttpResponse("< H1 > REGISTERD < /H1 >")
                render(request, 'users/register.html', {'form': form})
            else:
                messages.error(
                    request, 'Sorry we couldn\'t find your email please contact')
                render(request, 'users/register.html', {'form': form})

    return render(request, 'users/register.html', context)


def logoutInstructor(request):
    logout(request)
    context = {
        "title": "Logout"
    }
    return render(request, 'users/logout.html', context)
