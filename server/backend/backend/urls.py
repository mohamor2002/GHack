from django.contrib import admin
from django.urls import path
from backendapp import views
from django.urls import include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('backendapp.urls')),
    


]