from django.urls import path, re_path

from .views import *

urlpatterns = [
    # path('', index)
    path('categories/', categories),
    path('categories/<int:id>/', category),
    path('categories/<int:id>/products', category_products),
    path('products/', products),
    path('products/<int:id>/', product),
]
