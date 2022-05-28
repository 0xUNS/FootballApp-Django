import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import League from '../components/League'
import axios from 'axios'

function Clubs_List_Screen() {
    const [leagues, setLeagues]=useState([])
    useEffect(()=>{
        async function fetchLeagues(){
            const {data} = await axios.get('/api/ligues/')
            setLeagues(data)
        }
        fetchLeagues()
    },[])
    return (
        <div>
            <h2>Les Leagues</h2>
            <Row>
                {leagues.map(league =>(
                    <Col key={league.id} sm={12} md={6} lg={4} xl={3}>
                        <League league={league} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Clubs_List_Screen
