import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import League from '../components/League'
import axios from 'axios'

function LeaguesScreen() {
    const [leagues, setLeagues]=useState([])
    useEffect(()=>{
        async function fetchLeagues(){
            const {data} = await axios.get('/api/leagues/')
            setLeagues(data)
        }
        fetchLeagues()
    },[])
    return (
        <div>
            <h1>Les Leagues</h1>
            <Row>
                {leagues.map(league =>(
                    <Col key={league._id} sm={12} md={6} lg={4} xl={3}>
                        <League league={league} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default LeaguesScreen
