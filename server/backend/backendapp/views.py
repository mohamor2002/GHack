from rest_framework import generics
from rest_framework.response import Response
from .models import Investment
from .serializers import InvestmentSerializer
from rest_framework.views import APIView
from . import services
from django.db import models

from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.db.models import Count
from .models import Utilisateurs, Courses, Articles, Investment,EvaluationArticle

class InvestmentListView(generics.ListAPIView):
    serializer_class = InvestmentSerializer

    def get_queryset(self):
        # Your logic to get investments based on completed courses and article evaluations
        # Example logic:
        queryset = Investment.objects.all()
        # Add your filtering or ordering logic here
        return queryset

class SeedView(APIView):


    def post(self, request):
        try:
           
            services.populate_investments(10)
            services.populate_types(10)
            services.populate_sectors(10)
            return Response({"message":"success"})
        except:
            return Response({"message":"success"})


from django.http import JsonResponse
from django.db.models import Q
from .models import Utilisateurs, Articles, Investment

def user_liked_articles_investments(request, user_id=1):
    # Assuming you have the user ID passed in the URL

    # Retrieve the user's liked articles
    liked_articles = Articles.objects.filter(evaluationarticle__user_id=user_id, evaluationarticle__rating__gt=3)

    # Extract company names mentioned in the liked articles
    company_names = set()
    for article in liked_articles:
        company_names.update(article.content.split())  # Assuming company names are mentioned in the content

    # Fetch investments related to these companies along with their types and sectors
    investments = Investment.objects.filter(company__company_name__in=company_names)\
        .select_related('company', 'type')\
        .prefetch_related('company__sectorcompany_set__name_sector')

    # Prepare the response data
    response_data = []
    for investment in investments:
        response_data.append({
            'company_name': investment.company.company_name,
            'valuation': investment.valuation,
            'equity_offered': investment.equity_offered,
            'pitch': investment.pitch,
            'type': investment.type.name_type,
            'sectors': [sector.name_sector for sector in investment.company.sectorcompany_set.all()]
        })

    return JsonResponse({'investments': response_data})
