# FootballApp-Django ![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

[<img src="https://img.shields.io/badge/python-v3.10-yellow.svg?logo=LOGO">]() [<img src="https://img.shields.io/badge/django-v4.0-red.svg">]() [<img src="https://img.shields.io/badge/react npm-v8.11-red.svg">]()

Application web pour la consultation des les matches de Football avec Django &amp; React.js

Cette application permettra de voir la liste des matchs ( match d'aujourd'hui , les match d’hier et les matchs à venir qui seront representé par des onglets dans le menu principal)

- Une barre de recherche ou l’on saisit le nom de l’équipe, le résultat sera sous forme :
  - Le logo de l'équipe
  - Les footballeur de l’équipe ( nom et image )
  - Le coach (nom et image)
  - Les trophés gagnés les 5 années précédant
- Un onglet de vote pour les prévisions des équipes gagnantes par rapport aux compétitions
- Un onglet des vidéos les plus regarder des séquences de match
- Un onglet pour les matchs les plus attendus par la communauté
- Un lien de partage via les réseaux sociaux
- Un formulaire de souscription pour avoir les dernières news sportives via l’email.

#### :computer: Installation (sous Linux) 


```bash
$ git clone https://github.com/0xUNS/FootballApp-Django.git
$ virtualenv venv
$ source venv/bin/activate  #sous Windows: $ .\venv\Scripts\activate
(venv)$ pip install -r requirements.txt
```

#### :runner: Exécuter localement

```bash
(venv)$ python3 manage.py runserver
```

ouvrir le server local: 

<hr/>



#### :cloud: Déployer sur Heroku ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white):  [emsi-foot.herokuapp.com](https://emsi-foot.herokuapp.com/)

#### :tv: Demo [(video)](https://github.com/0xUNS/FootballApp-Django/raw/main/Demo_emsi-foot.webm)

![Demo_emsi-foot](Demo_emsi-foot.gif)
