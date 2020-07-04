"""hashx URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from .schema import schema
from django.contrib import admin
from django.urls import path, include , re_path
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import views as auth_views
from graphene_django.views import GraphQLView
from users.views import UserCreate
from .settings import DEBUG
from graphql_jwt.decorators import jwt_cookie
from users.views import activate_account
from social_django.utils import load_strategy

urlpatterns = [
    path('admin/', admin.site.urls),
    # Frontend should load before any application !
    # assuming this will be names home
    path('', include('frontend.urls'), name='home'),
    path('accounts/', include('allauth.urls')),
    
    path('register/',UserCreate.as_view(), name='register'),
    
    #path('register/create_profile/', CreateStudent.as_view(), name='create_profile'),
    path('login/', auth_views.LoginView.as_view(template_name='users/register.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('confirm/<uidb64>/<token>/',
        activate_account, name='activate'),
    # path('profile/', user_views.profile, name='profile'),
    # path('', include('users.urls'))
]
if (DEBUG == True):
    urlpatterns += [path('graphql/',
                         csrf_exempt(GraphQLView.as_view(graphiql=True, schema=schema)))]
else:
    urlpatterns += [path('graphql/',
                         jwt_cookie(GraphQLView.as_view(schema=schema)))]
