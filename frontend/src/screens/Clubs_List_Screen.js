import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Club from '../components/Club'
import axios from 'axios'

function Clubs_List_Screen() {
    const [clubs, setClubs]=useState([])
    useEffect(()=>{
        async function fetchClubs(){
            const {data} = await axios.get('/api/clubs/')
            setClubs(data)
        }
        fetchClubs()
    },[])
    return (
        <div className="container">
            <Col md={8} className="border">
                <Row className="py-4">
                <h2>Les Equipes</h2>
                    {clubs.map(club =>(
                        <Col key={club.code} md={12}>
                            <Club club={club} />
                        </Col>
                    ))}
                </Row>
            </Col>
            
            <Col md="auto" className="border">
            <h3>Top Leagues</h3>
            </Col>
        </div>
    )
}

export default Clubs_List_Screen
