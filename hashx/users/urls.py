from django.urls import path
from . import views

urlpatterns = [
    path('instructor/', views.homepage, name='instructor-homepage'),
    path('instructor/login/', views.loginpage, name='instructor-login'),
    path('instructor/signup/', views.signuppage, name='instructor-signup'),
    path('instructor/logout/', views.logoutInstructor, name='instructor-logout')
]
