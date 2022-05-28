import React, { useState, useEffect } from 'react'
import { Row, Col, Tabs, Tab } from 'react-bootstrap'
import Match from '../components/Match'
import axios from 'axios'

function HomeScreen() {
    const [matchs, setMatchs]=useState([])
    useEffect(()=>{
        async function fetchMatchs(){
            const {data} = await axios.get('/api/matchs/')
            setMatchs(data)
        }
        fetchMatchs()
    },[])
    const d = new Date();
    console.log(matchs)
    return (
        <div>
            <Col md={9}>
            <h2>Les matchs</h2>
            <Tabs defaultActiveKey="Aujourd'hui" className="mb-3">
                <Tab eventKey="Avant Hier" title="Avant Hier" disabled></Tab>
                <Tab eventKey="Hier" title="Hier">
                    Aucun match pour le {d.getDate() -  1 } - {d.getMonth() + 1} - {d.getFullYear()}
                </Tab>
                <Tab eventKey="Aujourd'hui" title="Aujourd'hui">
                <Row>
                    {matchs.map(match =>(
                        <Col key={match.id} md={12}>
                            <Match match={match} />
                        </Col>
                    ))}
                </Row>
                </Tab>
                <Tab eventKey="Demain" title="Demain">
                    Aucun match pour le {d.getDate() + 1} - {d.getMonth() + 1} - {d.getFullYear()}
                </Tab>
                <Tab eventKey="Après Demain" title="Après Demain" disabled></Tab>
                </Tabs>
            </Col>
            <Col md={3}>
            Top Leagues
            </Col>
        </div>
    )
}

export default HomeScreen
