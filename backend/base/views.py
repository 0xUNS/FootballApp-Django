from django.shortcuts import render
from django.http import JsonResponse # HttpResponse
from django.views import View
from .teams import teams
from rest_framework.views import APIView
from rest_framework.response import Response

class MyRoutes(APIView):
    def get(self,request):
        return Response('Hello')
class TeamsView(APIView):
    def get(self,request):
        return Response(teams)
class TeamView(APIView):
    def get(self,request,pk):
        team=None
        for i in teams:
            if i['_id']==pk:
                team = i
                break
        return Response(team)
