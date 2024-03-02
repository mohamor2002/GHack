from django.urls import path
from .views import InvestmentListView, SeedView, ordered_investments

urlpatterns = [
    path('investments/', InvestmentListView.as_view(), name='investment-list'),
    path('seed/', SeedView.as_view()),
    path('ordered-investments/', ordered_investments, name='ordered_investments'),
]
