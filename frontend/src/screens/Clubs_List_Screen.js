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
            <h1>Les Equipes</h1>
            <Row>
                {clubs.map(club =>(
                    <Col key={club.code} lg={12} xl={12}>
                        <Club club={club} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Clubs_List_Screen
