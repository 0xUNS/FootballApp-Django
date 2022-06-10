from rest_framework import serializers
from .models import Match, League, Club, Player, Coach, Country
import datetime

class CountryName_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['name','flag']
class ClubName_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = ['code','name','logo']
class LeagueName_Serializer(serializers.ModelSerializer):
    class Meta:
        model = League
        fields = ['code','name','logo']
class PlayerSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    age = serializers.SerializerMethodField(read_only=True)
    nationality = CountryName_Serializer(read_only=True)
    class Meta:
        model = Player
        fields = ['name','age','photo','nationality','position','number']
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
        fields = ['name','age','photo','nationality']
    def get_age(self, obj):
        return datetime.date.today().year - obj.birth_date.year
    def get_name(self, obj):
        return f"{obj.first_name} {obj.family_name}"
class ClubSerializer(serializers.ModelSerializer):
    country = CountryName_Serializer(read_only=True)
    leagues = LeagueName_Serializer(read_only=True, many=True)
    class Meta:
        model = Club
        fields = ['id','code','name','country','stadium','website','logo','rating','leagues'] 
class ClubListSerializer(serializers.ModelSerializer):
    country = CountryName_Serializer(read_only=True)
    coach = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = Club
        fields = ['code','name','country','coach','stadium','logo']
        ordering = ['rating','name']
class LeagueSerializer(serializers.ModelSerializer):
    country = CountryName_Serializer(read_only=True)
    clubs = ClubName_Serializer(read_only=True, many=True)
    class Meta:
        model = League
        fields = '__all__'
class LeagueListSerializer(serializers.ModelSerializer):
    country = CountryName_Serializer(read_only=True)
    class Meta:
        model = League
        fields = ['code','name','logo','confederation','country']
class MatchSerializer(serializers.ModelSerializer):
    team_h = ClubName_Serializer(read_only=True)
    team_a = ClubName_Serializer(read_only=True)
    competition = LeagueName_Serializer(read_only=True)
    rating = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Match
        fields = '__all__'
    def get_rating(self, obj):
        return (obj.team_h.rating + obj.team_a.rating)//2
