import re
from textwrap import indent
from django.http import HttpResponse
from django.shortcuts import render
from .models import *
from django.http.response import JsonResponse

# Create your views here.

def index(request):
    return HttpResponse('Check')



def categories(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False, json_dumps_params={"indent":3})

def category(request, id):
    try: 
        category = Category.objects.get(id=id).to_json()
        return JsonResponse(category, json_dumps_params={"indent":3})
    except Category.DoesNotExist as cdne:
        return JsonResponse({'message': str(cdne)}, status=400)

def  category_products(request, id):
    products = Product.objects.filter(id=id)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False, json_dumps_params={"indent":3})
    

def products(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False, json_dumps_params={"indent":3})


def product(request, id):
    try:
        product = Product.objects.get(id=id)
        return JsonResponse(product.to_json(), json_dumps_params={"indent":3})
    except Product.DoesNotExist as pdne:
        return JsonResponse({'message': str(pdne)}, status=400)
