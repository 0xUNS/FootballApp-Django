from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MatchSerializer, LeagueSerializer, ClubSerializer, PlayerSerializer, CoachSerializer, CountrySerializer, TestSerializer
from .models import Match, League, Club, Player, Coach, Country, TestData


# ------ TEST ----------
@api_view(['GET'])
def Tests(request):
    if request.method == 'GET':
        testdata = TestData.objects.all()
        serializer = TestSerializer(testdata, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
                    'Home':'',
                    'Liste des Matchs':'matchs/',
                    'Liste des Leagues':'ligues/',
                    'Liste des Clubs':'clubs/',
                    'Liste des Joueur':'joueurs/',
                    'Liste des Coachs':'coaches/',
                    'Liste des Pays':'pays/',
                }
    return Response(api_urls)

# ------ MATCHS ----------
@api_view(['GET'])
def MatchList(request):
    matchs = Match.objects.all()
    serializer = MatchSerializer(matchs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def MatchDetail(request, pk):
    match = Match.objects.get(_id=pk)
    serializer = MatchSerializer(match, many=False)
    return Response(serializer.data)

# ------ CLUBS ----------
@api_view(['GET'])
def ClubList(request):
    clubs = Club.objects.all()
    serializer = ClubSerializer(clubs, many=True)
    return Response(serializer.data)
    
@api_view(['GET'])
def ClubDetail(request, pk):
    club = Club.objects.get(code=pk)
    serializer = ClubSerializer(club, many=False)
    return Response(serializer.data)

# ------ LEAGUES ----------
@api_view(['GET'])
def LeagueList(request):
    leagues = League.objects.all()
    serializer = LeagueSerializer(leagues, many=True)
    return Response(serializer.data)
    
@api_view(['GET'])
def LeagueDetail(request, pk):
    league = League.objects.get(code=pk)
    serializer = LeagueSerializer(league, many=False)
    return Response(serializer.data)

# ------ PLAYERS ----------
@api_view(['GET'])
def PlayerList(request):
    players = Player.objects.all()
    serializer = PlayerSerializer(players, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def PlayerDetail(request, pk):
    player = Player.objects.get(id=pk)
    serializer = PlayerSerializer(player, many=False)
    return Response(serializer.data)

# ------ COACHES ----------
@api_view(['GET'])
def CoachList(request):
    coachs = Coach.objects.all()
    serializer = CoachSerializer(coachs, many=True)
    return Response(serializer.data)
    
@api_view(['GET'])
def CoachDetail(request, pk):
    coach = Coach.objects.get(id=pk)
    serializer = CoachSerializer(coach, many=False)
    return Response(serializer.data)

# ------ COUNTRY ----------
@api_view(['GET'])
def CountryList(request):
    if request.method == 'GET':
        countries = Country.objects.all()
        serializer = CountrySerializer(countries, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def CountryDetail(request, pk):
    country = Country.objects.get(code=pk)
    serializer = CountrySerializer(country, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def CountryCreate(request):
    serializer = CountrySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

"""

# ------ COUNTRY ----------
@api_view(['GET','POST'])
def CountryList(request):
    if request.method == 'GET':
        countries = Country.objects.all()
        serializer = CountrySerializer(countries, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CountrySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
      

# Creation des Clubs | nb: only for admin
@api_view(['POST'])
def ClubCreate(request):
    serializer = ClubSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)




from django.shortcuts import render
from django.http import JsonResponse # HttpResponse
from django.views import View
from .data import clubs, leagues
from rest_framework.views import APIView
from rest_framework.response import Response

class MyRoutes(APIView):
    def get(self,request):
        urls = [
                {
                    'Home':'',
                    'Liste des Clubs':'clubs/',
                    'Detail du Club':'clubs/<str:pk>',
                    'Liste des Ligues':'ligues/',
                    'Detail des Ligue':'ligues/<str:pk>'
                }
        ]
        return Response(urls)
class TeamsView(APIView):
    def get(self,request):
        return Response(clubs)
class TeamView(APIView):
    def get(self,request,pk):
        team=None
        for i in clubs:
            if i['code']==pk:
                team = i
                break
        return Response(team)

class LeaguesView(APIView):
    def get(self,request):
        return Response(leagues)
class LeagueView(APIView):
    def get(self,request,pk):
        league=None
        for i in leagues:
            if i['code']==pk:
                league = i
                break
        return Response(league)

"""