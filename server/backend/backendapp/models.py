from django.db import models

class Utilisateurs(models.Model):
    utilisateur_id = models.AutoField(primary_key=True)
    nom_utilisateur = models.CharField(max_length=255, null=False)
    email = models.CharField(max_length=255, null=False)
    mot_de_passe = models.CharField(max_length=255, null=False)
    picture_url = models.CharField(max_length=255, blank=True)
    bio = models.TextField(blank=True)

class Courses(models.Model):
    course_id = models.AutoField(primary_key=True)
    cours_name = models.CharField(max_length=255, null=False)
    description = models.CharField(max_length=255, null=False)
    creation_date = models.DateField(auto_now_add=True)

class Sections(models.Model):
    section_id = models.AutoField(primary_key=True)
    course = models.ForeignKey(Courses, on_delete=models.CASCADE)
    section_name = models.CharField(max_length=255)
    section_num = models.IntegerField()
    section_description = models.CharField(max_length=255)

class Lessons(models.Model):
    lesson_id = models.AutoField(primary_key=True)
    section = models.ForeignKey(Sections, on_delete=models.CASCADE)
    lesson_name = models.CharField(max_length=255)
    lesson_num = models.IntegerField()
    lesson_content = models.TextField()
    lesson_exp = models.IntegerField()

class Checkpoint(models.Model):
    checkpoint_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(Utilisateurs, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lessons, on_delete=models.CASCADE)
    is_done = models.BooleanField(default=False)

    class Meta:
        unique_together = (('user', 'lesson'),)

class Quizes(models.Model):
    quize_id = models.AutoField(primary_key=True)
    quize_name = models.CharField(max_length=255, null=False)
    quize_theme = models.CharField(max_length=255, null=False)
    course = models.ForeignKey(Courses, on_delete=models.CASCADE)

class QuestionsLesson(models.Model):
    question_lesson_id = models.AutoField(primary_key=True)
    lesson = models.ForeignKey(Lessons, on_delete=models.CASCADE)
    question_text = models.CharField(max_length=255, null=False)
    answer = models.BooleanField(null=False)

class Questions(models.Model):
    question_id = models.AutoField(primary_key=True)
    parent_id = models.IntegerField(null=True)
    question_type = models.CharField(max_length=255, null=False)
    question_text = models.CharField(max_length=255, null=False)

class AnswersQuizes(models.Model):
    answer_quizes_id = models.AutoField(primary_key=True)
    question = models.ForeignKey(Questions, on_delete=models.CASCADE)
    answer_text = models.CharField(max_length=255, null=False)
    answer_points = models.IntegerField()
    is_correct = models.BooleanField(null=False)

class Project(models.Model):
    project_id = models.AutoField(primary_key=True)
    project_title = models.CharField(max_length=255, null=False)
    project_description = models.CharField(max_length=255, blank=True)

class ProjectScore(models.Model):
    project_score_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(Utilisateurs, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    class Meta:
        unique_together = (('user', 'project'),)

class Portfolio(models.Model):
    portfolio_id = models.AutoField(primary_key=True)
    utilisateur = models.ForeignKey(Utilisateurs, on_delete=models.CASCADE)
    tracks_completed = models.IntegerField()
    courses_completed = models.IntegerField()
    projects_completed = models.IntegerField()
    exp = models.IntegerField()
    daily_exp = models.IntegerField()

class Podcasts(models.Model):
    podcast_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255, null=False)
    description = models.CharField(max_length=255, blank=True)
    topic = models.CharField(max_length=255, null=False)
    date_created = models.DateTimeField(null=False)
    duration = models.IntegerField()
    content = models.CharField(max_length=255)

class Articles(models.Model):
    article_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255, null=False)
    description = models.CharField(max_length=255, blank=True)
    topic = models.CharField(max_length=255, null=False)
    date_created = models.DateTimeField(null=False)
    content = models.TextField(null=False)

class EvaluationArticle(models.Model):
    user = models.ForeignKey(Utilisateurs, on_delete=models.CASCADE)
    article = models.ForeignKey(Articles, on_delete=models.CASCADE)
    rating = models.IntegerField()

    class Meta:
        unique_together = (('user', 'article'),)

class Resources(models.Model):
    utilisateur = models.ForeignKey(Utilisateurs, on_delete=models.CASCADE)
    articles = models.ManyToManyField(Articles)
    podcasts = models.ManyToManyField(Podcasts)
class PodcastInteraction(models.Model):
    user = models.ForeignKey(Utilisateurs, on_delete=models.CASCADE)
    podcast = models.ForeignKey(Podcasts, on_delete=models.CASCADE)
    liked = models.BooleanField(default=False)

class Company(models.Model):
    id_company = models.AutoField(primary_key=True)
    company_name = models.CharField(max_length=255, null=False)
    website = models.CharField(max_length=255, blank=True)
    incorporation_date = models.DateField(null=True)
    description = models.TextField(blank=True)

class Investment(models.Model):
    id_investment = models.AutoField(primary_key=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    valuation = models.IntegerField()
    equity_offered = models.IntegerField()
    pitch = models.TextField(blank=True)
    share_price = models.IntegerField()
    tax_relief = models.IntegerField()
    num_investors = models.IntegerField()
    type = models.ForeignKey('Type', on_delete=models.CASCADE)
    featured = models.BooleanField(default=False)

class Type(models.Model):
    name_type = models.CharField(primary_key=True, max_length=255)

class Sectors(models.Model):
    name_sector = models.CharField(primary_key=True, max_length=255, default ='')

class SectorCompany(models.Model):
    name_sector = models.ForeignKey(Sectors, on_delete=models.CASCADE, default ='')
    company_id = models.ForeignKey(Company, on_delete=models.CASCADE)
