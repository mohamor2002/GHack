from rest_framework import generics
from rest_framework.response import Response
from .models import Investment
from .serializers import InvestmentSerializer
from rest_framework.views import APIView
from . import services

class InvestmentListView(generics.ListAPIView):
    serializer_class = InvestmentSerializer

    def get_queryset(self):
        # Your logic to get investments based on completed courses and article evaluations
        # Example logic:
        queryset = Investment.objects.all()
        # Add your filtering or ordering logic here
        return queryset

class SeedView(APIView):


    def post(self, request):
        try:
            services.populate_courses(10)
            services.populate_checkpoint(10)
            services.populate_lessons(10)
            services.populate_sections(10)
            services.populate_utilisateurs(10)
            return Response({"message":"success"})
        except:
            return Response({"message":"success"})
