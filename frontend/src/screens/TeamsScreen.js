import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Team from '../components/Team'
import axios from 'axios'

function TeamsScreen() {
    const [teams, setTeams]=useState([])
    useEffect(()=>{
        async function fetchTeams(){
            const {data} = await axios.get('/api/teams/')
            setTeams(data)
        }
        fetchTeams()
    },[])
    return (
        <div>
            <h1>Les Equipes</h1>
            <Row>
                {teams.map(team =>(
                    <Col key={team._id} sm={12} md={6} lg={4} xl={3}>
                        <Team team={team} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default TeamsScreen
