from django.urls import path
from . import views

urlpatterns = [
    path('',views.MyRoutes.as_view(),name="routes"),
    path('teams/',views.TeamsView.as_view(),name="teams"),
    path('teams/<str:pk>',views.TeamView.as_view(),name="teams"),
]