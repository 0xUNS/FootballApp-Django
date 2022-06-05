from rest_framework import serializers
from .models import Match, League, Club, Player, Coach, Country, TestData 
import datetime
class CountryName_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['id','name','flag']
class ClubName_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = ['code','name','logo']
class LeagueName_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = ['code','name','logo']
class Leaguenamelogo_Serializer(serializers.ModelSerializer):
    class Meta:
        model = League
        fields = ['code','name','logo']