from django.urls import path
from .views import InvestmentListView, SeedView, user_liked_articles_investments

urlpatterns = [
    path('investments/', InvestmentListView.as_view(), name='investment-list'),
    path('seed/', SeedView.as_view()),
    path('get_ordered_investments/', user_liked_articles_investments, name='ordered_investments'),
]
