from django.contrib import admin
from .models import Club, Coach, Country, League, Match, Player
from import_export import resources
from import_export.admin import ImportExportModelAdmin

class ClubResource(resources.ModelResource):
   class Meta:
      model = Club
class ClubAdmin(ImportExportModelAdmin):
   resource_class = ClubResource
###############################################
class CoachResource(resources.ModelResource):
   class Meta:
      model = Coach
class CoachAdmin(ImportExportModelAdmin):
   resource_class = CoachResource
###############################################
class CountryResource(resources.ModelResource):
   class Meta:
      model = Country
class CountryAdmin(ImportExportModelAdmin):
   resource_class = CountryResource
###############################################
class LeagueResource(resources.ModelResource):
   class Meta:
      model = League
class LeagueAdmin(ImportExportModelAdmin):
   resource_class = LeagueResource
###############################################
class MatchResource(resources.ModelResource):
   class Meta:
      model = Match
class MatchAdmin(ImportExportModelAdmin):
   resource_class = MatchResource
###############################################
class PlayerResource(resources.ModelResource):
   class Meta:
      model = Player
class PlayerAdmin(ImportExportModelAdmin):
   resource_class = PlayerResource
###############################################

admin.site.register(Club, ClubAdmin)
admin.site.register(League, LeagueAdmin)
admin.site.register(Country, CountryAdmin)
admin.site.register(Player, PlayerAdmin)
admin.site.register(Coach, CoachAdmin)
admin.site.register(Match, MatchAdmin)
