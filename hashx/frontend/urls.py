from django.urls import path
from . import views
from django.views.generic import TemplateView


urlpatterns = [
    path('', views.index, name="material-react-app"),
    path('firebase-messaging-sw.js' , (TemplateView.as_view(template_name="firebase-messaging-sw.js", content_type='application/javascript', )), name='sw.js'),
]
