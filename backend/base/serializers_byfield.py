from rest_framework import serializers
from .models import Match, League, Club, Player, Coach, Country, TestData 


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'

class Coachname_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Coach
        fields = ['first_name','family_name','photo']

class Countrynameflag_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['name','flag']