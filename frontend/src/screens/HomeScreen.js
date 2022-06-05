import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Tabs, Tab, Image, ListGroup,} from 'react-bootstrap';
import Match from '../components/Match';
import axios from 'axios';

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

    const [leagues, setLeagues]=useState([])
    useEffect(()=>{
        async function fetchLeagues(){
            const {data} = await axios.get('/api/ligues/')
            setLeagues(data)
        }
        fetchLeagues()
    },[])

    console.log(matchs)
    console.log(leagues)
    
    return (
        <div>
            <Col md={9}>
            <h2>Les matchs</h2>
            <Tabs defaultActiveKey="Aujourd'hui" className="mb-3">
                <Tab eventKey="Avant Hier" title="Avant Hier" disabled></Tab>
                <Tab eventKey="Hier" title="Hier">
                    Aucun match pour le {d.getDate() -  1 } / {d.getMonth() + 1} / {d.getFullYear()}
                </Tab>
                <Tab eventKey="Aujourd'hui" title="Aujourd'hui">
                <Row>
                    {matchs?.map(match =>(
                            <Match match={match} />
                    ))}
                </Row>
                </Tab>
                <Tab eventKey="Demain" title="Demain">
                    Aucun match pour le {d.getDate() + 1} / {d.getMonth() + 1} / {d.getFullYear()}
                </Tab>
                <Tab eventKey="Après Demain" title="Après Demain" disabled></Tab>
                </Tabs>
            </Col>
            <Col md={4} className="">
                <ListGroup  as="ol" numbered>
                        <ListGroup.Item active><h4><strong>Top Leagues</strong></h4></ListGroup.Item>
                    
                        {leagues?.map(league =>(
                            <ListGroup.Item action variant="info">
                                <Link to={`/ligues/${league.code}`}>
                                    <Image src={league.logo} alt={league.name} width="30" height="30" fluid/> &nbsp;
                                    {league.name}
                                </Link>
                            </ListGroup.Item>
                        ))}
                </ListGroup>
            </Col>
        </div>
    )
}

export default HomeScreen
