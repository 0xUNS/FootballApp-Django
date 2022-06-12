import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card} from 'react-bootstrap';
import axios from 'axios';
import Iframe from 'react-iframe'
import Rating from '../components/Rating';
import Coach from '../components/Coach';
import Players from '../components/Players';

function Clubs_Detail_Screen({match}) {
    const [club, setClub]=useState([])
    const { id } = useParams();
    useEffect(()=>{
        async function fetchClub(){
            const {data} = await axios.get(`/api/clubs/${id}`)
            setClub(data)
        }
        fetchClub()
    },[id])
    if(club.length === 0) return(<h1>Equipe Introuvable</h1>)
    return (
        <div>
            <Row>
            <Col md={4} className="py-3 rounded" align="center">
                    <Image src={club.logo} alt={club.name} width="200" height="200" fluid/>
                    <h3><strong>{club.name}</strong></h3>

                </Col>
                <Col md={5} className="py-3">
                    <Card>
                <Col>
                    <div className="px-5 py-3">

                        <div>{club.stadium}</div>
                        <div><a href={club.website}>{club.website}</a></div>
                        <div>
                            <hr/>
                            {club.country?.name} &nbsp; &nbsp; &nbsp; &nbsp;
                            <Image src={club.country?.flag} alt={club.country?.name} width="32" height="32" roundedCircle/>
                            <hr/>
                        </div>
                        <div className="my-3">
                        <Rating value={club.rating} color={`#f8e825`} />
                        </div>
                    </div>
                    <div>
                        <ListGroup  as="ol">
                        <ListGroup.Item active><h4><strong>Liste des Competions</strong></h4></ListGroup.Item>
                    
                        {club.leagues?.map(league =>(
                            <ListGroup.Item action variant="info">
                                <Link to={`/ligues/${league.code}`}>
                                    <Image src={league.logo} alt={league.name} width="30" height="30" fluid/> &nbsp;
                                    {league.name}
                                </Link>
                            </ListGroup.Item>
                        ))}
                        </ListGroup>
                    </div>
                </Col>
                    </Card>
                </Col>
                <Col md={3}>
                    <Coach id={club.id} />
                </Col>
                    <h3>Joueurs</h3>
                <Row>
                    <Players id={club.id} />
                </Row>
                <hr/>
                <Row>
                    <h3>Media</h3>
                    <Col md={6}>
                        <h4>Video</h4>
                    <Iframe url={`https://www.youtube.com/embed/${club.video}`} width="100%" height="450px" display="initial" position="relative"/>
                    </Col>
                    <Col md={6}>
                        <h4>Twitter</h4>
                    <Iframe url={`https://www.twitter.com/search?q=${club.name}`} width="100%" height="450px" display="initial" position="relative"/>
                    </Col>
                </Row>
            </Row>
        </div>
    )
}

export default Clubs_Detail_Screen