from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MatchSerializer, ClubListSerializer, ClubSerializer, LeagueListSerializer, LeagueSerializer, PlayerSerializer, CoachSerializer
from .models import Match, Club, League, Player, Coach

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
                    'Home':'https://emsi-foot.herokuapp.com/',
                    ' Matchs':'https://emsi-foot.herokuapp.com/api/matchs/',
                    ' Leagues':'https://emsi-foot.herokuapp.com/api/ligues/',
                    ' Clubs':'https://emsi-foot.herokuapp.com/api/clubs/',
                    '  Joueur (id:club)':'https://emsi-foot.herokuapp.com/api/joueurs/1',
                    '  Coachs (id:club)':'https://emsi-foot.herokuapp.com/api/coach/1',
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