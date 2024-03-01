from django.db import models

class Company(models.Model):
    id_company = models.AutoField(primary_key=True)
    company_name = models.CharField(max_length=100, null=False)
    website = models.CharField(max_length=200, null=True, blank=True)
    incorporation_date = models.DateField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)

class Investment(models.Model):
    id_investment = models.AutoField(primary_key=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    valuation = models.IntegerField()
    equity_offered = models.IntegerField()
    pitch = models.TextField()
    share_price = models.IntegerField()
    tax_relief = models.IntegerField()
    num_investors = models.IntegerField()
    type = models.ForeignKey('Type', on_delete=models.CASCADE)

class Type(models.Model):
    name_type = models.CharField(primary_key=True, max_length=100)

class Sector(models.Model):
    name_sector = models.CharField(primary_key=True, max_length=100)

class SectorCompany(models.Model):
    sector = models.ForeignKey(Sector, on_delete=models.CASCADE)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
