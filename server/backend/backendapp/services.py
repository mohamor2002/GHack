from backendapp.models import Utilisateurs, Courses, Sections, Lessons, Checkpoint, Quizes, QuestionsLesson, Questions, AnswersQuizes, Project, ProjectScore, Portfolio, Podcasts, Articles, EvaluationArticle, Resources, PodcastInteraction, Company, Investment, Type, Sectors, SectorCompany
from faker import Faker

fake = Faker()

def populate_quizes(n):
    for _ in range(n):
        course = Courses.objects.order_by('?').first()  # Random course
        quize = Quizes.objects.create(
            quize_name=fake.text(20),
            quize_theme=fake.text(20),
            course=course
        )
        quize.save()

def populate_questions_lessons(n):
    for _ in range(n):
        lesson = Lessons.objects.order_by('?').first()  # Random lesson
        question = QuestionsLesson.objects.create(
            lesson=lesson,
            question_text=fake.text(50),
            answer=fake.boolean()
        )
        question.save()

def populate_questions(n):
    for _ in range(n):
        question = Questions.objects.create(
            question_type=fake.text(20),
            question_text=fake.text(50)
        )
        question.save()

def populate_answers_quizes(n):
    for _ in range(n):
        question = Questions.objects.order_by('?').first()  # Random question
        answer = AnswersQuizes.objects.create(
            question=question,
            answer_text=fake.text(50),
            answer_points=fake.random_int(0, 100),
            is_correct=fake.boolean()
        )
        answer.save()

def populate_projects(n):
    for _ in range(n):
        project = Project.objects.create(
            project_title=fake.text(20),
            project_description=fake.text(100)
        )
        project.save()

def populate_project_scores(n):
    for _ in range(n):
        user = Utilisateurs.objects.order_by('?').first()  # Random user
        project = Project.objects.order_by('?').first()  # Random project
        project_score = ProjectScore.objects.create(
            user=user,
            project=project
        )
        project_score.save()

def populate_portfolios(n):
    for _ in range(n):
        user = Utilisateurs.objects.order_by('?').first()  # Random user
        portfolio = Portfolio.objects.create(
            utilisateur=user,
            tracks_completed=fake.random_int(0, 100),
            courses_completed=fake.random_int(0, 100),
            projects_completed=fake.random_int(0, 100),
            exp=fake.random_int(0, 1000),
            daily_exp=fake.random_int(0, 100)
        )
        portfolio.save()

def populate_podcasts(n):
    for _ in range(n):
        podcast = Podcasts.objects.create(
            title=fake.text(20),
            description=fake.text(100),
            topic=fake.text(20),
            date_created=fake.date_time(),
            duration=fake.random_int(1, 100),
            content=fake.binary(length=1024)
        )
        podcast.save()

def populate_articles(n):
    for _ in range(n):
        article = Articles.objects.create(
            title=fake.text(20),
            description=fake.text(100),
            topic=fake.text(20),
            date_created=fake.date_time(),
            content=fake.text(500)
        )
        article.save()

def populate_evaluation_articles(n):
    for _ in range(n):
        user = Utilisateurs.objects.order_by('?').first()  # Random user
        article = Articles.objects.order_by('?').first()  # Random article
        evaluation_article = EvaluationArticle.objects.create(
            user=user,
            article=article,
            rating=fake.random_int(1, 5)
        )
        evaluation_article.save()

def populate_resources(n):
    for _ in range(n):
        user = Utilisateurs.objects.order_by('?').first()  # Random user
        articles = Articles.objects.order_by('?').all()[:fake.random_int(1, 5)]  # Random articles
        podcasts = Podcasts.objects.order_by('?').all()[:fake.random_int(1, 5)]  # Random podcasts
        resource = Resources.objects.create(
            utilisateur=user
        )
        resource.articles.add(*articles)
        resource.podcasts.add(*podcasts)


def populate_sector_companies(n):
    for _ in range(n):
        sector = Sectors.objects.order_by('?').first()  # Random sector
        company = Company.objects.order_by('?').first()  # Random company
        sector_company = SectorCompany.objects.create(
            name_sector=sector,
            company_id=company
        )
        sector_company.save()

def populate_investments(n):
    for _ in range(n):
        company = Company.objects.order_by('?').first()  # Random company
        investment_type = Type.objects.order_by('?').first()  # Random investment type
        investment = Investment.objects.create(
            company=company,
            valuation=fake.random_int(100000, 1000000),
            equity_offered=fake.random_int(5, 50),
            pitch=fake.text(200),
            share_price=fake.random_int(1, 10),
            tax_relief=fake.random_int(5, 20),
            num_investors=fake.random_int(1, 20),
            type=investment_type,
            featured=fake.boolean()
        )
        investment.save()
def populate_types():
    types = ['Seed', 'Series A', 'Series B', 'Series C', 'Series D', 'Series E']
    for type_name in types:
        investment_type = Type.objects.create(
            name_type=type_name
        )
        investment_type.save()

def populate_sectors():
    sectors = ['Technology', 'Healthcare', 'Finance', 'Real Estate', 'Energy', 'Retail']
    for sector_name in sectors:
        sector = Sectors.objects.create(
            name_sector=sector_name
        )
        sector.save()
