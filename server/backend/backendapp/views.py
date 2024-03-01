from django.http import JsonResponse
from django.db.models import Count, Q
from .models import Utilisateurs, EvaluationArticle, Checkpoint, Investment, Podcasts, Articles, Company, SectorCompany

def get_ordered_companies(request):
    user_id = request.GET.get('user_id')

    # Retrieve liked articles by the user
    liked_articles = EvaluationArticle.objects.filter(user_id=user_id, rating__gte=4).values_list('article_id', flat=True)

    # Retrieve completed courses by the user
    completed_courses = Checkpoint.objects.filter(user_id=user_id, is_done=True).values_list('lesson__section__course_id', flat=True)

   
    # Retrieve sectors associated with liked articles
    sectors = SectorCompany.objects.filter(company_id__in=liked_articles).values_list('name_sector__name_sector', flat=True)

    # Order companies based on sectors and types associated with user's interactions
    ordered_companies = Company.objects.annotate(
        num_liked_articles=Count('sectorcompany__name_sector', filter=Q(sectorcompany__name_sector__in=sectors)),
        num_completed_courses=Count('sectorcompany__name_sector', filter=Q(sectorcompany__name_sector__in=completed_courses)),
          ).order_by('-num_liked_articles', '-num_completed_courses').distinct()

    # Serialize the ordered companies into JSON
    serialized_companies = [{
        'company_name': company.company_name,
        'num_liked_articles': company.num_liked_articles,
        'num_completed_courses': company.num_completed_courses,
        
    } for company in ordered_companies]

    return JsonResponse({'companies': serialized_companies})
