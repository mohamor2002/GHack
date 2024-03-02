from django.shortcuts import render
from django.shortcuts import render
from rest_framework import generics
from django.http import JsonResponse
from .models import Company, Investment, Type, Sectors, SectorCompany, Podcasts, Articles
from django.views.generic import View
from .utils import generateArticle, generatePodcast
from rest_framework.decorators import api_view
from datetime import datetime


from .serializers import CompanySerializer, InvestmentSerializer, TypeSerializer, SectorSerializer, SectorCompanySerializer

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
        return Sectors.objects.filter(sectorcompany__company_id=company_id)
class InvestmentListByType(View):
    def get(self, request, type_name):
        investments = Investment.objects.filter(type__name_type=type_name)
        data = []
        for investment in investments:
            data.append({
                'id_investment': investment.id_investment,
                'company_name': investment.company.company_name,
                'valuation': investment.valuation,
                'equity_offered': investment.equity_offered,
                'pitch': investment.pitch,
                'share_price': investment.share_price,
                'tax_relief': investment.tax_relief,
                'num_investors': investment.num_investors,
                'featured': investment.featured
            })
        return JsonResponse(data, safe=False)
class CompanyListBySector(View):
    def get(self, request, sector_name):
        companies = Company.objects.filter(sectorcompany__name_sector__name_sector=sector_name)
        data = []
        for company in companies:
            data.append({
                'id_company': company.id_company,
                'company_name': company.company_name,
                'website': company.website,
                'incorporation_date': company.incorporation_date,
                'description': company.description
            })
        return JsonResponse(data, safe=False)
@api_view(['POST'])
def generate_article_and_save(request):
    # Generate article content using your generateArticle function
    article_content = generateArticle()

    # Save the generated article to the database
    article = Articles.objects.create(
        title=article_content['title'],
        description=article_content['description'],
        topic=article_content['topic'],
        date_created=article_content['date_created'],
        content=article_content['content']
    )

    # Return the saved article data in JSON format
    return JsonResponse({
        'article_id': article.article_id,
        'title': article.title,
        'description': article.description,
        'topic': article.topic,
        'date_created': article.date_created,
        'content': article.content
    })
@api_view(['POST'])
def generate_podcast_and_save(request,topic):
    # Generate podcast content
    podcast_content = generatePodcast(request,topic)


    # Save podcast to the database
    podcast = Podcasts.objects.create(
        title=podcast_content['title'],
        description=podcast_content['description'],
        topic=topic,
        date_created= datetime.now(),
        duration=15,
        content=podcast_content['content']
    )

    # Return the saved podcast data
    podcast_data = {
        'id': podcast.podcast_id,
        'title': podcast.title,
        'description': podcast.description,
        'topic': podcast.topic,
        'date_created': podcast.date_created,
        'duration': podcast.duration,
        'content':podcast.content
        # Add other fields as needed
    }

    return JsonResponse(podcast_data)