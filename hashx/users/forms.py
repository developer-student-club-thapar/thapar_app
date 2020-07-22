from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.forms import ModelForm


class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email', 'password']


class RegisterForm(forms.ModelForm):
    password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={'placeholder': 'Password', 'class': 'form-control'},
        ),
    )
    confirm_password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={'placeholder': 'Repeat Password', 'class': 'form-control'},
        ),
    )

    email = forms.EmailField(
        widget=forms.EmailInput(
            attrs={'placeholder': 'Email', 'class': 'form-control'}),
        max_length=254,
    )

    class Meta:
        model = User
        fields = ('email', 'password', 'confirm_password')


class LoginForm(forms.ModelForm):
    password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={'placeholder': 'Password', 'class': 'form-control'},
        ),
    )
    username = forms.CharField(
        widget=forms.TextInput(
            attrs={'placeholder': 'Username', 'class': 'form-control'}),
        max_length=30,
        required=True,
    )

    class Meta:
        model = User
        fields = ('username', 'password',)
