from django.urls import path
from . import views

urlpatterns = [
    path('companies/<int:pk>/', views.CompanyRetrieve.as_view(), name='company-retrieve'),
    path('investments/<int:pk>/', views.InvestmentRetrieve.as_view(), name='investment-retrieve'),
    path('investments/', views.InvestmentList.as_view()),
    path('types/<str:pk>/', views.TypeRetrieve.as_view()),
    path('sectors/<str:pk>/', views.SectorRetrieve.as_view()),
    path('companies/<int:company_id>/sectors/', views.CompanySectorsList.as_view()),
    path('investments/by_type/<str:type_name>/', views.InvestmentListByType.as_view(), name='investment-list-by-type'),
    path('companies/by_sector/<str:sector_name>/', views.CompanyListBySector.as_view(), name='company-list-by-sector'),
    path('generate_article_and_save/', views.generate_article_and_save, name='generate_article_and_save'),
    path('generate_podcast_and_save/<str:topic>', views.generate_podcast_and_save, name='generate_podcast_and_save'),
]
