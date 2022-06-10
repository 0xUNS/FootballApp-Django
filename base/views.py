from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MatchSerializer, ClubListSerializer, ClubSerializer, LeagueListSerializer, LeagueSerializer, PlayerSerializer, CoachSerializer
from .models import Match, Club, League, Player, Coach

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
                    'Home':'http://127.0.0.1:8000/',
                    ' Matchs':'http://127.0.0.1:8000/api/matchs/',
                    ' Leagues':'http://127.0.0.1:8000/api/ligues/',
                    ' Clubs':'http://127.0.0.1:8000/api/clubs/',
                    '  Joueur (id:club)':'http://127.0.0.1:8000/api/joueurs/1',
                    '  Coachs (id:club)':'http://127.0.0.1:8000/api/coach/1',
                }
    return Response(api_urls)

# ------ MATCHS ----------
@api_view(['GET'])
def MatchList(request):
    matchs = Match.objects.all()
    serializer = MatchSerializer(matchs, many=True)
    return Response(serializer.data)

# ------ CLUBS ----------
@api_view(['GET'])
def ClubList(request):
    clubs = Club.objects.all()
    serializer = ClubListSerializer(clubs, many=True)
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
    serializer = LeagueListSerializer(leagues, many=True)
    return Response(serializer.data)
    
@api_view(['GET'])
def LeagueDetail(request, pk):
    league = League.objects.get(code=pk)
    serializer = LeagueSerializer(league, many=False)
    return Response(serializer.data)

# ------ PLAYERS ----------
@api_view(['GET'])
def PlayerList(request, pk):
    players = Player.objects.filter(club=pk)
    serializer = PlayerSerializer(players, many=True)
    return Response(serializer.data)

# ------ COACHES ----------    
@api_view(['GET'])
def CoachDetail(request, pk):
    coach = Coach.objects.get(club=pk)
    serializer = CoachSerializer(coach, many=False)
    return Response(serializer.data)