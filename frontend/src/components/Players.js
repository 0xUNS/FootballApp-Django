import React, { useState, useEffect } from 'react'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import axios from 'axios'

function Players({ id }) {
    const [players, setPlayers]=useState([])
    useEffect(()=>{
        async function fetchPlayers(){
            const { data } = await axios.get(`/api/joueurs/${id}`)
            setPlayers(data)
        }
        fetchPlayers()
    },[id])
    console.log(players)
    return (
        <>
            {players.map(player =>(
                    <Col key={player.id} md={3} xs={6}>
                        <Card>
                            <Image src={player.photo} width="100%" />
                            <Card.Body>
                                <Card.Title as="div"className="list-group-item d-flex justify-content-between align-items-center"><strong>{player.name}</strong>
                                    <span class="badge bg-primary rounded-pill">{player.number}</span>
                                </Card.Title>
                                <Card.Text as="div">
                                    Position: <span class="badge bg-secondary">{player.position}</span>
                                </Card.Text>          
                                <Card.Text as="div">
                                    Age: {player.age}
                                </Card.Text>
                                <Card.Text as="div">
                                    Nationality: player.nationality.name player.nationality.flag
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
        </>
    )
}

export default Players