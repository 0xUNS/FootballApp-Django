from django.db import models
from django.core.validators import RegexValidator
from .tests import path_image, path_imag_p, POSITION_LIST, TYPES_LIST, CONFEDERATIONS_LIST
# Create your models here.

class Player(models.Model):
    first_name = models.CharField(max_length=15)
    family_name = models.CharField(max_length=15)
    birth_date = models.DateField(blank=True, null=True)
    position = models.CharField(max_length=20, choices=POSITION_LIST)
    number = models.PositiveIntegerField(null=True)
    photo = models.ImageField(default='profile.png',upload_to = path_imag_p,blank=True)
    club = models.ForeignKey('Club',related_name='players',on_delete=models.SET_NULL, null=True)
    nationality = models.ForeignKey('Country',related_name='players',on_delete=models.SET_NULL, null=True)
    def __str__(self):
        return f"{self.first_name} {self.family_name}"
class Coach(models.Model):
    first_name = models.CharField(max_length=15)
    family_name = models.CharField(max_length=15)
    birth_date = models.DateField(blank=True, null=True)
    photo = models.ImageField(default="profile.png",upload_to = path_imag_p,blank=True)
    nationality = models.ForeignKey('Country',related_name='coach',on_delete=models.SET_NULL, null=True)
    club = models.OneToOneField('Club', related_name='coach',on_delete=models.SET_NULL, null=True)
    def __str__(self):
        return f"{self.first_name} {self.family_name}"
class Club(models.Model):
    code = models.CharField(max_length=5,unique=True,validators=[RegexValidator('^[A-Z,0-9]*$','Seules les lettres sont autorisées.')])
    name = models.CharField(max_length=30)
    logo = models.ImageField(default='club.png',upload_to = path_image, blank=True)
    stadium = models.CharField(max_length=30, blank=True)
    rating = models.PositiveIntegerField(default=0, blank=True)
    website = models.URLField(max_length=100, blank=True)
    country = models.ForeignKey('Country',related_name='clubs',on_delete=models.SET_NULL, null=True)
    def __str__(self):
        return f"{self.name}  [{self.code}]"
    def save(self, force_insert=False, force_update=False):
        self.code = self.code.upper()
        super(Club, self).save(force_insert, force_update)
class League(models.Model):
    code = models.CharField(max_length=5,unique=True,validators=[RegexValidator('^[A-Z]*$','Seules les lettres sont autorisées.')])
    name = models.CharField(max_length=30)
    logo = models.ImageField(default='league.png', upload_to = path_image, blank=True)
    website = models.URLField(max_length=100, blank=True)
    confederation = models.CharField( max_length=30, choices=CONFEDERATIONS_LIST)
    type = models.CharField(max_length=30, choices=TYPES_LIST)
    country = models.ForeignKey('Country',related_name='leagues',on_delete=models.SET_NULL, null=True)
    clubs = models.ManyToManyField(Club, related_name='leagues')
    def __str__(self):
        return f"{self.name}  [{self.code}]"
    class Meta:
        ordering = ['country','name']
class Match(models.Model):
    competition = models.ForeignKey('League',on_delete=models.SET_NULL, null=True)

    team_h = models.ForeignKey(Club, related_name='matchs',on_delete=models.SET_NULL, null=True)
    goals_h = models.PositiveIntegerField(default=0, blank=True)

    team_a = models.ForeignKey(Club, related_name='matches',on_delete=models.SET_NULL, null=True)
    goals_a = models.PositiveIntegerField(default=0, blank=True)

    date = models.DateField(blank=True, null=True)

    def __str__(self):
        return f"{self.team_h} vs. {self.team_a}"

class Country(models.Model):
    code = models.CharField(max_length=5,unique=True,validators=[RegexValidator('^[A-Z]*$','Seules les lettres sont autorisées.')])
    name = models.CharField(max_length=30)
    flag = models.ImageField(default='country.png', upload_to = path_image, blank=True)
    def __str__(self):
        return f"{self.name}  [{self.code}]"
    class Meta:
        ordering = ['name']