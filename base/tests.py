from django.test import TestCase

# Create your tests here.
def path_image(instance, filename):
    return '/'.join([type(instance).__name__, instance.code+'.'+filename.split('.')[-1]])
def path_imag_p(instance, filename):
    return '/'.join(['Profil', instance.first_name +"_"+instance.family_name+'.'+filename.split('.')[-1]])

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
    ('CONMEBOL','CONMEBOL'),
    ('AFC','AFC'),
    ('CONCACAF','CONCACAF')
)