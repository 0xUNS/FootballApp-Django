from django.db import models
from django.core.validators import RegexValidator

# Create your models here.
def path_image(instance, filename):
    return '/'.join([type(instance).__name__+'s', instance.code+'.'+filename.split('.')[-1]])

COUNTRIES_LIST = (
        ('gb-eng', 'Angleterre'),
        ('ma', 'Maroc'),
        ('fr', 'France'),
    )
TYPES_LIST = (
        ('National League','Ligue Nationale'),
        ('National Cup','Coupe Nationale'),
        ('Continental Cup','Coupe Continentale'),
        ('Continental Cup','Coupe Internationale'),
    )
CONFEDERATIONS_LIST = (
    ('UEFA','UEFA'),
    ('CAF','CAF'),
    ('AFCON','AFCON'),
)
class Club(models.Model):
    code = models.CharField(max_length=5,primary_key=True,unique=True,validators=[RegexValidator('^[A-Z,a-z]*$','Seules les lettres sont autorisées.')])
    name = models.CharField( max_length=30)
    logo = models.ImageField(upload_to = path_image, blank=True)
    website = models.URLField(max_length=100, blank=True)
    country = models.CharField(max_length=10, choices=COUNTRIES_LIST, blank=True)

    def __str__(self):
        return f"{self.name}  [{self.code}]"

    def save(self, force_insert=False, force_update=False):
        self.code = self.code.upper()
        super(Club, self).save(force_insert, force_update)

class League(models.Model):
    code = models.CharField(max_length=5,primary_key=True,unique=True,validators=[RegexValidator('^[A-Z,a-z]*$','Seules les lettres sont autorisées.')])
    name = models.CharField( max_length=30)
    logo = models.ImageField(upload_to = path_image, blank=True)
    website = models.URLField(max_length=100, blank=True)
    country = models.CharField(max_length=10, choices=COUNTRIES_LIST)
    confederation = models.CharField( max_length=30, choices=CONFEDERATIONS_LIST)
    type = models.CharField(max_length=30, choices=TYPES_LIST)

    def __str__(self):
        return f"{self.name}  [{self.code}]"

    def save(self, force_insert=False, force_update=False):
        self.code = self.code.upper()
        super(League, self).save(force_insert, force_update)


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