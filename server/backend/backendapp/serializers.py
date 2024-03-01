from rest_framework import serializers
from .models import Company, Investment, Type, Sectors, SectorCompany

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class InvestmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investment
        fields = '__all__'

class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = '__all__'

class SectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sectors
        fields = '__all__'

class SectorCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = SectorCompany
        fields = '__all__'