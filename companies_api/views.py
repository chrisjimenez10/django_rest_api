from django.shortcuts import render
from rest_framework import generics
from .serializers import CompanySerializer
from .models import Company

# Create your views here.
class CompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all().order_by('id')
    serializer_class = CompanySerializer

class CompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all().order_by('id')
    serializer_class = CompanySerializer