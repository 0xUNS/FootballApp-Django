from django.db import models
from django.core.validators import RegexValidator

# Create your models here.
def path_image(instance, filename):
    return '/'.join([type(instance).__name__, instance.code+'.'+filename.split('.')[-1]])
def path_imag_p(instance, filename):
    return '/'.join(['Profil', instance.id+'.'+filename.split('.')[-1]])

POSITION_LIST = (
        ('Gardien de but','Gardien de but'),
        ('Défenseur','Défenseur'),
        ('Milieu de terrain','Milieu de terrain'),
        ('Attaquant','Attaquant'),
    )

TYPES_LIST = (
        ('Ligue Nationale','Ligue Nationale'),
        ('Coupe Nationale','Coupe Nationale'),
        ('Coupe Continentale','Coupe Continentale'),
        ('Coupe Internationale','Coupe Internationale'),
    )
CONFEDERATIONS_LIST = (
    ('UEFA','UEFA'),
    ('CAF','CAF'),
    ('AFCON','AFCON'),
)

STATUS_LIST = (
    ('Le match n\'a pas encore commencé','Le match n\'a pas encore commencé'),
    ('Match en cours','Match en cours'),
    ('Match terminé','Match terminé'),
)

class TestData(models.Model):
    name = models.CharField(max_length=15)
    age = models.IntegerField()
    photo = models.ImageField(upload_to = 'admins/',blank=True)

class Player(models.Model):
    first_name = models.CharField(max_length=15)
    family_name = models.CharField(max_length=15)
    birth_date = models.DateField(blank=True, null=True)
    position = models.CharField(max_length=20, choices=POSITION_LIST)
    number = models.PositiveIntegerField(null=True)
    photo = models.ImageField(default='_NULL.png',upload_to = path_imag_p,blank=True)
    Club = models.ForeignKey('Club',related_name='players',on_delete=models.SET_NULL, null=True)
    nationality = models.ForeignKey('Country',related_name='players',on_delete=models.SET_NULL, null=True)
    def __str__(self):
        return f"{self.first_name} {self.family_name}"

class Coach(models.Model):
    first_name = models.CharField(max_length=15)
    family_name = models.CharField(max_length=15)
    birth_date = models.DateField(blank=True, null=True)
    photo = models.ImageField(default="_NULL.png",upload_to = path_imag_p,blank=True)
    nationality = models.ForeignKey('Country',related_name='coach',on_delete=models.SET_NULL, null=True)
    club = models.OneToOneField('Club', related_name='coach',on_delete=models.SET_NULL, null=True)
    def __str__(self):
        return f"{self.first_name} {self.family_name}"


class Club(models.Model):
    code = models.CharField(max_length=5,unique=True,validators=[RegexValidator('^[A-Z,0-9]*$','Seules les lettres sont autorisées.')])
    name = models.CharField(max_length=30)
    logo = models.ImageField(default='NULL.png',upload_to = path_image, blank=True)
    stadium = models.CharField(max_length=30, blank=True)
    Rating = models.PositiveIntegerField(default=0, blank=True)
    website = models.URLField(max_length=100, blank=True)
    country = models.ForeignKey('Country',related_name='clubs',on_delete=models.SET_NULL, null=True)
    def __str__(self):
        return f"{self.name}  [{self.code}]"
    def save(self, force_insert=False, force_update=False):
        self.code = self.code.upper()
        super(Club, self).save(force_insert, force_update)
    class Meta:
        ordering = ['country','name']


class League(models.Model):
    code = models.CharField(max_length=5,unique=True,validators=[RegexValidator('^[A-Z]*$','Seules les lettres sont autorisées.')])
    name = models.CharField(max_length=30)
    logo = models.ImageField(default='NULL.png', upload_to = path_image, blank=True)
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
    Team_H = models.ForeignKey(Club, related_name='matchs',on_delete=models.SET_NULL, null=True)
    n_Goals_H = models.PositiveIntegerField(default=0, blank=True)

    Team_A = models.ForeignKey(Club, related_name='matches',on_delete=models.SET_NULL, null=True)
    n_Goals_A = models.PositiveIntegerField(default=0, blank=True)

    competition = models.ForeignKey('League',on_delete=models.SET_NULL, null=True)
    date = models.DateField(blank=True, null=True)


class Country(models.Model):
    code = models.CharField(max_length=5,unique=True,validators=[RegexValidator('^[A-Z]*$','Seules les lettres sont autorisées.')])
    name = models.CharField(max_length=30)
    flag = models.ImageField(default='__NULL.png', upload_to = path_image, blank=True)
    def __str__(self):
        return f"{self.name}  [{self.code}]"
    class Meta:
        ordering = ['name']

"""
    order = models.ForeignKey(Order,related_name='items', on_delete=models.CASCADE)
    date_match = models.DateTimeField(default=timezone.now)
    is_played = models.BooleanField(default=False)
    quantity = models.PositiveIntegerField(default=1)
"""
"""
class AdminUser(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    date_of_birth = models.DateField(blank=True, null=True)
    photo = models.ImageField(upload_to='admins/',blank=True)
"""