from django.shortcuts import render
from rest_framework import generics
from .models import Projects
from .serializers import ProjectsSerializer
from rest_framework.pagination import PageNumberPagination
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAdminUser, IsAuthenticated

class ProjectsAPIListPagination(PageNumberPagination):
    page_size = 3
    page_size_query_param = 'page_size'
    max_page_size = 10000

class PortfolioAPIList(generics.ListCreateAPIView):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer


class ProjectAPIUpdate(generics.RetrieveUpdateAPIView):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer
    # permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)


class ProjectAPIDestroy(generics.RetrieveDestroyAPIView):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer
    # permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)