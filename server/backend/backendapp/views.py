from django.shortcuts import render
from django.shortcuts import render
from rest_framework import generics
from .models import Company, Investment, Type, Sector, SectorCompany
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
    queryset = Sector.objects.all()
    serializer_class = SectorSerializer
class CompanySectorsList(generics.ListAPIView):
    serializer_class = SectorSerializer

    def get_queryset(self):
        company_id = self.kwargs['company_id']
        return Sector.objects.filter(sectorcompany__company_id=company_id)
# Create your views here.
