import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';

function Leagues_Detail_Screen({match}) {
    const [league, setLeague]=useState([])
    const { id } = useParams();
    useEffect(()=>{
        async function fetchLeague(){
            const {data} = await axios.get(`/api/ligues/${id}`)
            setLeague(data)
        }
        fetchLeague()
    },[id])
    if(league.length === 0) return(<h1>Ligue Introuvable</h1>)

    return (
        <div>
            <Row>
                <Col md={4} className="py-3" align="center">
                    <Image src={league.logo} alt={league.name} width="200" height="200" fluid/>
                    <h3><strong>{league.name}</strong></h3>

                </Col>
                <Col md={4} className="py-3">
                <Card className="p-3">
                    <div>
                        <Image src="/media/League/UEFA.png" alt="confederation" width={40} fluid/> &nbsp; &nbsp;
                        {league.confederation}
                    </div>
                    <div>{league.type}</div>
                    <div><a href={league.website}>{league.website}</a></div>
                    <div><hr/>
                        {league.country?.name} &nbsp; &nbsp; &nbsp; &nbsp;
                        <Image src={league.country?.flag} alt={league.country?.name} width="32" height="32" roundedCircle/>
                    </div>
                    </Card>
                </Col>
                <Col md={4}>
                        <ListGroup  as="ol" numbered>
                        <ListGroup.Item active><h4><strong>Clubs</strong></h4></ListGroup.Item>
                        
                            {league.clubs?.map(club =>(
                                <ListGroup.Item action variant="info">
                                    <Link to={`/clubs/${club.code}`}>
                                        <Image src={club.logo} alt={club.name} width="30" height="30" fluid/> &nbsp;
                                        {club.name}
                                    </Link>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default Leagues_Detail_Screen