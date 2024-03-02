from rest_framework import generics
from rest_framework.response import Response
from .models import Investment
from .serializers import InvestmentSerializer
from rest_framework.views import APIView
from . import services
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.db.models import Count
from .models import Utilisateurs, Courses, Articles, Investment

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


from django.db.models import Count
from django.http import JsonResponse
from .models import Utilisateurs, Portfolio, Articles, Investment, Type, Sectors, SectorCompany

def ordered_investments(request):
    user_id = request.user.id  # Assuming you have user authentication
    completed_courses = Portfolio.objects.filter(utilisateur_id=user_id)

    # Retrieve the articles rated by the user
    rated_articles = Articles.objects.filter(evaluationarticle__user_id=user_id)

    # Extract sectors and types from completed courses and rated articles
    sectors = completed_courses.values_list('utilisateur__projectscore__project__sectors__name_sector', flat=True)
    types = completed_courses.values_list('utilisateur__projectscore__project__type__name_type', flat=True)
    types = types.union(rated_articles.values_list('type__name_type', flat=True))

    # Find investments with shared sectors and types
    investments = Investment.objects.filter(company__sectors__name_sector__in=sectors,
                                             type__name_type__in=types).annotate(
        num_shared_sectors=Count('company__sectors__name_sector'),
        num_shared_types=Count('type__name_type')
    ).order_by('-num_shared_sectors', '-num_shared_types')

    # Serialize the investment data or process it further as needed
    investment_data = []
    for investment in investments:
        # Serialize each investment as needed
        investment_data.append({
            'company_name': investment.company.company_name,
            'valuation': investment.valuation,
            'equity_offered': investment.equity_offered,
            # Add other fields as needed
        })

    return JsonResponse({'investments': investment_data})
