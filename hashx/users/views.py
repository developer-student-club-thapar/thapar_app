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
from django.core.mail import BadHeaderError, send_mail
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
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            # if user.is_active:
            login(request, user)
            # print("logged in")
            return render(request, 'acad/homepage.html')
        else:
            # print("nope")
            messages.error(request, 'Username or Password is Incorrect')
            render(request, 'users/login.html', context)

    # print("yeah wtf happened")
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
            password = request.POST.get('password')
            confirm_password = request.POST.get('confirm_password')
            if password != confirm_password:
                messages.error(request, 'Passwords do not match')
                return render(request, 'users/register.html', context)

            try:
                Instructor.objects.get(email=email)
                instructor = Instructor.objects.get(email=email)
                username = email.replace("@thapar.edu", "")
                new_user = User.objects.create_user(
                    username=username, email=email, password=password, first_name=instructor.name)
                instructor.user = new_user
                iname = instructor.name
                instructor.save()
                messages.success(
                    request, f' Welcome { iname } , please check your email ')
                messages.success(
                    request, f' You Username is { username }. It will be required while logging in ')
                return render(request, 'users/register.html', {'form': form})

            except:
                messages.error(
                    request, 'Sorry we couldn\'t find your email please contact us at projectvexio@gmail.com')
                render(request, 'users/register.html', {'form': form})

    return render(request, 'users/register.html', context)


def logoutInstructor(request):
    logout(request)
    context = {
        "title": "Logout"
    }
    return render(request, 'users/logout.html', context)
