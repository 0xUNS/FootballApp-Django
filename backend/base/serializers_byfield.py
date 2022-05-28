from rest_framework import serializers
from .models import Match, League, Club, Player, Coach, Country, TestData 
import datetime
class CountryName_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['name','flag']
class Leaguenamelogo_Serializer(serializers.ModelSerializer):
    class Meta:
        model = League
        fields = ['name','logo']
    
class Coach_inClub_Serializer(serializers.ModelSerializer):
    nationality = CountryName_Serializer(read_only=True)
    age = serializers.SerializerMethodField(read_only=True)
    name = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Coach
        fields = ['name','nationality','age','photo']
    def get_age(self, obj):
        return datetime.date.today().year - obj.birth_date.year
    def get_name(self, obj):
        return f"{obj.first_name} {obj.family_name}"