from rest_framework import serializers
from .models import Match, League, Club, Player, Coach, Country, TestData
from .serializers_byfield import *


class CountrySerializer(serializers.ModelSerializer):
    # leagues = LeagueSerializer(read_only=True, many=True)
    # clubs = ClubSerializer(read_only=True, many=True)
    class Meta:
        model = Country
        fields = '__all__'

class ClubSerializer(serializers.ModelSerializer):
    country = CountryName_Serializer(read_only=True)
    coach = Coach_inClub_Serializer(read_only=True)
    leagues = serializers.SlugRelatedField(read_only=True, many=True,slug_field='name')
    class Meta:
        model = Club
        fields = ['id','code','name','country','coach','stadium','website','logo','rating','leagues']

class LeagueSerializer(serializers.ModelSerializer):
    country = CountryName_Serializer(read_only=True)
    clubs = serializers.SlugRelatedField(read_only=True, many=True,slug_field='name')
    class Meta:
        model = League
        fields = '__all__'
class PlayerSerializer(serializers.ModelSerializer):
    nationality = CountrySerializer(read_only=True)
    class Meta:
        model = Player
        fields = '__all__'

class MatchSerializer(serializers.ModelSerializer):
    Team_H = ClubSerializer(read_only=True)
    Team_A = ClubSerializer(read_only=True)
    competition = LeagueSerializer(read_only=True)
    class Meta:
        model = Match
        fields = '__all__'
class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestData
        fields = '__all__'

class ClubList_Serializer(serializers.ModelSerializer):
    country = CountryName_Serializer(read_only=True)
    coach = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = Club
        fields = ['code','name','country','coach','stadium','logo']
        ordering = ['rating','name']

class LeagueList_Serializer(serializers.ModelSerializer):
    country = CountryName_Serializer(read_only=True)
    class Meta:
        model = League
        fields = ['code','name','logo','confederation','country']