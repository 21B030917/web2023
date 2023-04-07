from django.http import HttpResponse, JsonResponse

from .models import *


# Create your views here.


def index(request):
    return HttpResponse('CHECKK')


def companies_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)


def get_company(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        return JsonResponse(company.to_json())
    except Company.DoesNotExist as err:
        return JsonResponse({'message': str(err)}, status=400)


def company_vacancies(request, company_id):
    try:
        vacancies = Company.objects.get(id=company_id).vacancies.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    except Company.DoesNotExist as err:
        return JsonResponse({'massage': str(err)}, status=400)
