# Import necessary models
from models import Company, Investment, Type, Sector, SectorCompany
from django.utils import timezone
from datetime import date

def create_dummy_data():
    # Create sectors
    sector1 = Sector.objects.create(name_sector='Technology')
    sector2 = Sector.objects.create(name_sector='Finance')
    sector3 = Sector.objects.create(name_sector='Healthcare')

    # Create types
    type1 = Type.objects.create(name_type='Seed')
    type2 = Type.objects.create(name_type='Series A')
    type3 = Type.objects.create(name_type='Series B')

    # Create companies
    company1 = Company.objects.create(
        company_name='Company 1',
        website='https://www.company1.com',
        incorporation_date=date(2020, 1, 1),
        description='Description of Company 1'
    )
    company2 = Company.objects.create(
        company_name='Company 2',
        website='https://www.company2.com',
        incorporation_date=date(2019, 6, 15),
        description='Description of Company 2'
    )

    # Create investments
    investment1 = Investment.objects.create(
        company=company1,
        valuation=1000000,
        equity_offered=20,
        pitch='Pitch for Company 1',
        share_price=10,
        tax_relief=5,
        num_investors=3,
        type=type1
    )
    investment2 = Investment.objects.create(
        company=company2,
        valuation=2000000,
        equity_offered=25,
        pitch='Pitch for Company 2',
        share_price=15,
        tax_relief=6,
        num_investors=5,
        type=type2
    )

    # Associate companies with sectors
    SectorCompany.objects.create(sector=sector1, company=company1)
    SectorCompany.objects.create(sector=sector2, company=company2)

if __name__ == '__main__':
    create_dummy_data()
