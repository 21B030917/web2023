"""shop_back URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URL conf
    1. Import to include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
# from django.urls import path

from django.urls import path, include
from api.views import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsListAPIView,
)

urlpatterns = [
    path('api/products/', ProductListAPIView.as_view(), name='product-list'),
    path('api/products/<int:id>/', ProductDetailAPIView.as_view(), name='product-detail'),
    path('api/categories/', CategoryListAPIView.as_view(), name='category-list'),
    path('api/categories/<int:id>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('api/categories/<int:id>/products/', CategoryProductsListAPIView.as_view(), name='category-products-list'),
]
