from django.urls import path
from . import views

urlpatterns = [
    path('companies/<int:pk>/', views.CompanyRetrieve.as_view(), name='company-retrieve'),
    path('investments/<int:pk>/', views.InvestmentRetrieve.as_view(), name='investment-retrieve'),
    path('investments/', views.InvestmentList.as_view()),
    path('types/<str:pk>/', views.TypeRetrieve.as_view()),
    path('sectors/<str:pk>/', views.SectorRetrieve.as_view()),
    path('companies/<int:company_id>/sectors/', views.CompanySectorsList.as_view()),
]