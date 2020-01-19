from django.urls import path
from .import views 


urlpatterns=[
    path('', views.menu, name='menu'),
    path('simple/', views.simple, name='simple'),
    path('formulario/', views.formulario, name='formulario'),

]