import React from 'react';
import { Image } from 'react-bootstrap';

function About() {
    return (
        <div className="container">
                    <Image src="/media/logo_150x150.jpg" alt="logo" width={200} roundedCircle/>
            <h2>About</h2>

        <div className="container mx-5">
            <h3>Application pour les matches de Football avec Django &amp; React.js</h3>
            <p>Cette application permettra de voir la liste des matchs ( match d'aujourd'hui , les match d'hier et les matchs à venir qui seront representé par des onglets dans le menu principal). </p>

            <ul>
                <li>Une barre de recherche ou l'on saisit le nom de l'équipe, le résultatsera sous forme :
                    <ul>
                        <li>Le logo de l'équipe</li>
                        <li>Les footballeur de l'équipe ( nom et image )</li>
                        <li>Le coach (nom et image)</li>
                    </ul>
                </li>
                <li>Un onglet de vote pour les prévisions des équipes gagnantes parrapport aux compétitions</li>
                <li>Un onglet des vidéos les plus regarder des séquences de match</li>
                <li>Un onglet pour les matchs les plus attendus par la communauté</li>
                <li>Un lien de partage via les réseaux sociaux</li>
            </ul>
            <h3>Documentations :</h3>
            ReactJS :
            <ul>
                <li><a href="https://reactjs.org/docs/">https://reactjs.org/</a></li>
                <li><a href="https://react-bootstrap.netlify.app/getting-started/introduction/">https://react-bootstrap.netlify.app/</a></li>
                <li><a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/">https://getbootstrap.com/</a></li>
                <li><a href="https://stackoverflow.com/">https://stackoverflow.com/</a></li>
                <li><a href="https://codesandbox.io/">https://codesandbox.io/</a></li>
                <li><a href="https://codepen.io/">https://codepen.io/</a></li>
                <li><a href="https://mdbootstrap.com/docs/b5/react/">https://mdbootstrap.com/</a></li>
            </ul>
            Django :
            <ul>
                <li><a href="https://docs.djangoproject.com/en/4.0/">https://docs.djangoproject.com/</a></li>
                <li><a href="https://www.django-rest-framework.org/tutorial/quickstart/">https://www.django-rest-framework.org/</a></li>
                <li><a href="https://www.geeksforgeeks.org/serializers-django-rest-framework/">https://www.geeksforgeeks.org/</a></li>
                <li><a href="https://www.django-rest-framework.org/api-guide/relations/">https://www.django-rest-framework.org/</a></li>
            </ul>
            Icons :
            <ul>
                <li><a href="https://www.svgrepo.com/">https://www.svgrepo.com/</a></li>
                <li><a href="https://fontawesome.com/icons/">https://fontawesome.com/</a></li>
            </ul>
        </div>
        </div>
    )
}

export default About