import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Tabs, Tab, Image, ListGroup, Alert } from 'react-bootstrap';
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
    return (
        <Row>
            <Alert variant="warning">
                <strong>Le site web est en cours de développement. </strong>
                Pour tout renseignement rendez-vous sur
                <Alert.Link href="https://github.com/0xUNS/FootballApp-Django" target="_blank"> GitHub.</Alert.Link>
                </Alert>
            <Col md={7}>
            <h2>Les matchs</h2>
            <Tabs defaultActiveKey="Aujourd'hui" className="mb-3">
                <Tab eventKey="Hier" title="Hier">
                    Aucun match pour le {d.getDate() -  1 } / {d.getMonth() + 1} / {d.getFullYear()} <br/><br/><br/><br/><br/><br/>
                </Tab>
                <Tab eventKey="Aujourd'hui" title="Aujourd'hui">
                <Row>
                    {matchs?.map(match =>(
                            <Match match={match} />
                    ))}
                </Row>
                </Tab>
                <Tab eventKey="Demain" title="Demain">
                    Aucun match pour le {d.getDate() + 1} / {d.getMonth() + 1} / {d.getFullYear()} <br/><br/><br/><br/><br/><br/>
                </Tab>
                <Tab eventKey="Après Demain" title="Après Demain" disabled></Tab>
                </Tabs>
            <hr></hr>
            </Col>
            <Col md={3} className="mx-5">
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
        </Row>
    )
}

export default HomeScreen
