
from django.contrib import admin
from django.urls import path, re_path, include
from back_portfolio.views import *
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/auth/', include('djoser.urls')), # Авторизцаия при помощи библиотеки djoser
    re_path(r'^auth/', include('djoser.urls.authtoken')), # Авторизцаия при помощи библиотеки djoser
    path('api/v1/portfolio/', PortfolioAPIList.as_view()),
    path('api/v1/portfolio/<int:pk>/', ProjectAPIUpdate.as_view()),
    path('api/v1/portfolio/<int:pk>/', ProjectAPIDestroy.as_view()),
]

urlpatterns = (
        urlpatterns
        + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
        + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    )