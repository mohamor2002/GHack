from backendapp.models import Utilisateurs, Courses, Sections, Lessons, Checkpoint
from faker import Faker

fake = Faker()

def populate_utilisateurs(n):
    for _ in range(n):
        utilisateur = Utilisateurs.objects.create(
            nom_utilisateur=fake.name(),
            email=fake.email(),
            mot_de_passe=fake.password(),
            picture_url=fake.image_url(),
            bio=fake.text()
        )

        utilisateur.save()

def populate_courses(n):
    for _ in range(n):
        course = Courses.objects.create(
            cours_name=fake.text(20),
            description=fake.text(100)
        )
        populate_sections(course, fake.random_int(1, 5))
        course.save()

def populate_sections(course, num_sections):
    for i in range(1, num_sections + 1):
        section = Sections.objects.create(
            course=course,
            section_name=f"Section {i}",
            section_num=i,
            section_description=fake.text(50)
        )
        populate_lessons(section, fake.random_int(1, 5))
        section.save()

def populate_lessons(section, num_lessons):
    for i in range(1, num_lessons + 1):
        lesson = Lessons.objects.create(
            section=section,
            lesson_name=f"Lesson {i}",
            lesson_num=i,
            lesson_content=fake.text(200),
            lesson_exp=fake.random_int(1, 10)
        )
        populate_checkpoint(lesson)
        lesson.save()

def populate_checkpoint(lesson):
    user = Utilisateurs.objects.order_by('?').first()  # Random user
    checkpoint = Checkpoint.objects.create(
        user=user,
        lesson=lesson,
        is_done=fake.boolean()
    )

    checkpoint.save()