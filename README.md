# FootballApp-Django
## Application pour les matches de Football avec Django &amp; React.js

Cette application permettra de voir la liste des matchs ( match
d'aujourd'hui , les match d’hier et les matchs à venir qui seront
representé par des onglets dans le menu principal)


● Une barre de recherche ou l’on saisit le nom de l’équipe, le résultat
sera sous forme :
Le logo de l'équipe
Les footballeur de l’équipe ( nom et image )
Le coach (nom et image)
Les trophés gagnés les 5 années précédant

● Un onglet de vote pour les prévisions des équipes gagnantes par
rapport aux compétitions

● Un onglet des vidéos les plus regarder des séquences de match

● Un onglet pour les matchs les plus attendus par la communauté

● Un lien de partage via les réseaux sociaux

● Un formulaire de souscription pour avoir les dernières news sportives
via l’email.

Django

```
git clone https://github.com/amzilyounes/FootballApp-Django.git

virtualenv dj_venv

dj_venv/bin/activate

pip install django

python manage.py runserver

pip install djangorestframework

pip install django-cors-headers

```

React
```
npx create-react-app frontend


npm install react-bootstrap

npm install react-router-dom

npm install react-router-bootstrap

npm install axios

```

Servers

```
python3 manage.py runserver

npm start
```