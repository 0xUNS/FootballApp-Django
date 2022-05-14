from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api_urls"),
    path('clubs/', views.ClubList, name="clubs-list"),
    path('clubs/<str:pk>', views.ClubDetail, name="club-detail"),
    path('ligues/',views.LeagueList,name="leagues-list"),
    path('ligues/<str:pk>',views.LeagueDetail,name="league-detail"),
]