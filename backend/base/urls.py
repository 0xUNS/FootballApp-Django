from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api_urls"),

    path('matchs/',views.MatchList,name="matchs-list"),
    path('matchs/<str:pk>',views.MatchDetail,name="matchs-detail"),

    path('ligues/',views.LeagueList,name="leagues-list"),
    path('ligues/<str:pk>',views.LeagueDetail,name="league-detail"),

    path('clubs/', views.ClubList, name="clubs-list"),
    path('clubs/<str:pk>', views.ClubDetail, name="club-detail"),


    path('joueurs/',views.PlayerList,name="joueurs-list"),
    path('joueurs/<str:pk>',views.PlayerDetail,name="joueurs-detail"),

    path('pays/',views.CountryList,name="pays-list"),
    path('pays/<str:pk>',views.CountryDetail,name="pays-detail"),

    path('test/',views.Tests,name="test-data"),

]