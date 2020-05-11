from django.shortcuts import render , redirect
from django.http import HttpResponse
from .forms import UserRegisterForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required

# Create your views here.
def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}!')
            return redirect('profile')
    else:
        register_form = UserRegisterForm()
        context = {
            'register_form' : register_form,
        }
    return render(request, 'users/register.html', context)
@login_required
def profile(request):
    return HttpResponse('<h2> profile </h2>')