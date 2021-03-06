import React, { useState, useEffect } from 'react';
import { Col, Image, Card, Alert } from 'react-bootstrap';
import axios from 'axios';

function Players({ id }) {
    const [players, setPlayers]=useState([])
    useEffect(()=>{
        async function fetchPlayers(){
            const { data } = await axios.get(`/api/joueurs/${id}`)
            setPlayers(data)
        }
        fetchPlayers()
    },[id])
    if(players.length === 0) return(<Card className="p-3">Données Des Joueurs Introuvables <hr/><Alert variant="warning"><strong>L'administrateur n'a pas rempli les données, </strong> visiter <Alert.Link href="#/clubs/CHE" target="_blank">  Chelsea FC </Alert.Link> en tant que modèle</Alert></Card>)

    return (
        <>
            {players?.map(player =>(
                    <Col key={player.id} md={3} xs={6}>
                        <Card className="p-3">
                            <Image src={player.photo} width="100%" rounded/>
                            <Card.Body>
                                <Card.Title as="div" className="list-group-item d-flex justify-content-between align-items-center"><strong>{player.name}</strong>
                                    <span class="badge bg-primary rounded-pill">{player.number}</span>
                                </Card.Title>
                                <Card.Text as="div">
                                    Position: <span class="badge bg-secondary">{player.position}</span>
                                </Card.Text>          
                                <Card.Text as="div">
                                    Age: {player.age}
                                </Card.Text>
                                <Card.Text as="div">
                                    <hr/>
                                    &nbsp;
                                    {player.nationality?.name} &nbsp; &nbsp; &nbsp;
                                    <Image src={player.nationality?.flag} alt={player.nationality?.name} width="32" height="32" roundedCircle/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
        </>
    )
}

export default Players