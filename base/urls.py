from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api_urls"),

    path('ligues/',views.LeagueList,name="leagues-list"),
    path('ligues/<str:pk>',views.LeagueDetail,name="league-detail"),

    path('clubs/', views.ClubList, name="clubs-list"),
    path('clubs/<str:pk>', views.ClubDetail, name="club-detail"),

    path('matchs/',views.MatchList,name="matchs-list"),
    path('joueurs/<int:pk>',views.PlayerList,name="joueurs-list"),
    path('coach/<int:pk>',views.CoachDetail,name="coach-detail"),


]