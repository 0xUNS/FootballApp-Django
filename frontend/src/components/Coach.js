import React, { useState, useEffect } from 'react'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import axios from 'axios'

function Coach({ id }) {
    const [coach, setCoach]=useState([])
    useEffect(()=>{
        async function fetchCoach(){
            const { data } = await axios.get(`/api/coachs/${id}`)
            setCoach(data)
        }
        fetchCoach()
    },[id])
    console.log(coach)
    return (
            <Card>
            <Image src={coach.photo} width="100%"/>
            <Card.Body>
                <Card.Title as="div"><strong>{coach.name}</strong></Card.Title>
            </Card.Body>
            <Card.Text as="div">
                Age: {coach.age}
            </Card.Text>
            <Card.Text as="div">
                Nationality: coach.nationality.name coach.nationality.flag
            </Card.Text>

        </Card>
    )
}

export default Coach