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
    class Meta:
        model = Club
        fields = '__all__'

class LeagueSerializer(serializers.ModelSerializer):
    country = CountrySerializer(read_only=True)
    class Meta:
        model = League
        fields = '__all__'
class PlayerSerializer(serializers.ModelSerializer):
    nationality = CountrySerializer(read_only=True)
    class Meta:
        model = Player
        fields = '__all__'
class CoachSerializer(serializers.ModelSerializer):
    nationality = CountrySerializer(read_only=True)
    class Meta:
        model = Coach
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
    country = Countrynameflag_Serializer(read_only=True)
    coach = serializers.PrimaryKeyRelatedField(allow_null=True, read_only=True)
    coach = Coachname_Serializer(read_only=True)
    class Meta:
        model = Club
        fields = ['name','country','coach','stadium','logo']