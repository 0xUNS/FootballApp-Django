from django.urls import path
from . import views

urlpatterns = [
    path('',views.MyRoutes.as_view(),name="routes"),
    path('equipes/',views.ProductsView.as_view(),name="equipes"),
    path('equipes/<str:pk>',views.ProductView.as_view(),name="equipes"),
]