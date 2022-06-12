import React, { useState, useEffect } from 'react';
import { Image, Card, Alert } from 'react-bootstrap';
import axios from 'axios';

function Coach({ id }) {
    const [coach, setCoach]=useState([])
    useEffect(()=>{
        async function fetchCoach(){
            const { data } = await axios.get(`/api/coach/${id}`)
            setCoach(data)
        }
        fetchCoach()
    },[id])
    if(coach.length === 0) return(<Card className="p-3">Données Du Coach Introuvables <hr/><Alert variant="warning"><strong>L'administrateur n'a pas rempli les données, </strong> visiter <Alert.Link href="#/clubs/CHE" target="_blank">  Chelsea FC </Alert.Link> en tant que modèle</Alert></Card>)

    return (
            <Card className="p-3">
                
            <Image src={coach.photo} width="100%" rounded/>
            <Card.Body>
                <Card.Title as="div"><strong>{coach.name}</strong></Card.Title>
            </Card.Body>
            <Card.Text as="div">
                Age: {coach.age}
            </Card.Text>
            <Card.Text as="div">
                <hr/>
                Nationalité : &nbsp;
                {coach.nationality?.name} &nbsp; &nbsp;
                <Image src={coach.nationality?.flag} alt={coach.nationality?.name} width="32" height="32" roundedCircle/>
            </Card.Text>

        </Card>
    )
}

export default Coach