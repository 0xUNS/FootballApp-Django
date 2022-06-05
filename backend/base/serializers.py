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
    leagues = LeagueName_Serializer(read_only=True, many=True)
    class Meta:
        model = Club
        fields = ['id','code','name','country','coach','stadium','website','logo','rating','leagues']

class LeagueSerializer(serializers.ModelSerializer):
    country = CountryName_Serializer(read_only=True)
    clubs = ClubName_Serializer(read_only=True, many=True)
    class Meta:
        model = League
        fields = '__all__'
class PlayerSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    age = serializers.SerializerMethodField(read_only=True)
    nationality = CountryName_Serializer(read_only=True)
    class Meta:
        model = Player
        fields = '__all__'
    def get_age(self, obj):
        return datetime.date.today().year - obj.birth_date.year
    def get_name(self, obj):
        return f"{obj.first_name} {obj.family_name}"
class CoachSerializer(serializers.ModelSerializer):
    nationality = CountryName_Serializer(read_only=True)
    age = serializers.SerializerMethodField(read_only=True)
    name = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Coach
        fields = '__all__'
    def get_age(self, obj):
        return datetime.date.today().year - obj.birth_date.year
    def get_name(self, obj):
        return f"{obj.first_name} {obj.family_name}"

class MatchSerializer(serializers.ModelSerializer):
    team_h = ClubName_Serializer(read_only=True)
    team_a = ClubName_Serializer(read_only=True)
    competition = Leaguenamelogo_Serializer(read_only=True)
    rating = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Match
        fields = '__all__'
    def get_rating(self, obj):
        return (obj.team_h.rating + obj.team_a.rating)//2
    
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