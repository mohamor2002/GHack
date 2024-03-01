from django.urls import path
from backendapp import views

urlpatterns = [
    path('companies/', views.get_ordered_companies, name='get_ordered_companies'),
    # Add other URL patterns as needed
]
