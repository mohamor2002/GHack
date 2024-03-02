from django.urls import path
from .views import InvestmentListView, SeedView

urlpatterns = [
    path('investments/', InvestmentListView.as_view(), name='investment-list'),
    path('seed/', SeedView.as_view())
]
