from django.contrib import admin
from django.http import HttpRequest
from django.urls import path, include

from .views import *

urlpatterns = [
    # path("", index)
    path("companies", companies_list),
    path("companies/<int:company_id>", get_company),
    path('companies/<int:company_id>/vacancies/', company_vacancies)

]