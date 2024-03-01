from django.http import JsonResponse
from django.db.models import Count, Q
from .models import Utilisateurs, EvaluationArticle, Checkpoint, Investment, Podcasts, Articles, Company, SectorCompany
from .serializers import CompanySerializer, InvestmentSerializer, TypeSerializer, SectorSerializer, SectorCompanySerializer
from rest_framework import generics

def get_ordered_investments(request):
    user_id = request.GET.get('user_id')

    # Retrieve liked articles by the user
    liked_articles = EvaluationArticle.objects.filter(user_id=user_id, rating__gte=4).values_list('article_id', flat=True)

    # Retrieve completed courses by the user
    completed_courses = Checkpoint.objects.filter(user_id=user_id, is_done=True).values_list('lesson__section__course_id', flat=True)

    # Retrieve sectors associated with liked articles
    sectors = SectorCompany.objects.filter(company_id__in=liked_articles).values_list('name_sector__name_sector', flat=True)

    # Order investments based on sectors and types associated with user's interactions
    ordered_investments = Investment.objects.annotate(
        num_liked_articles=Count('company__sectorcompany__name_sector', filter=Q(company__sectorcompany__name_sector__in=sectors)),
        num_completed_courses=Count('company__sectorcompany__name_sector', filter=Q(company__sectorcompany__name_sector__in=completed_courses)),
    ).order_by('-num_liked_articles', '-num_completed_courses').distinct()

    # Serialize the ordered investments using the InvestmentSerializer
    serialized_investments = InvestmentSerializer(ordered_investments, many=True).data

    return JsonResponse({'investments': serialized_investments})
class CompanyRetrieve(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class InvestmentRetrieve(generics.RetrieveAPIView):
    queryset = Investment.objects.all()
    serializer_class = InvestmentSerializer
class InvestmentList(generics.ListAPIView):
    queryset = Investment.objects.all()
    serializer_class = InvestmentSerializer
class TypeRetrieve(generics.RetrieveAPIView):
    queryset = Type.objects.all()
    serializer_class = TypeSerializer

class SectorRetrieve(generics.RetrieveAPIView):
    queryset = Sectors.objects.all()
    serializer_class = SectorSerializer
class CompanySectorsList(generics.ListAPIView):
    serializer_class = SectorSerializer

    def get_queryset(self):
        company_id = self.kwargs['company_id']
        return Sector.objects.filter(sectorcompany__company_id=company_id)
