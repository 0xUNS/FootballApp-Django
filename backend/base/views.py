from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ClubSerializer, LeagueSerializer
from .models import Club, League

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
                    'Home':'',
                    'Liste des Clubs':'clubs/',
                    'Detail du Club':'clubs/<str:pk>',
                    'Liste des Ligues':'ligues/',
                    'Detail des Ligue':'ligues/<str:pk>'
                }
    return Response(api_urls)

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
    
"""
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