import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import axios from 'axios'
import Rating from '../components/Rating'
import Coach from '../components/Coach'
import Players from '../components/Players'

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
    console.log(club)
    return (
        <div>
            <Link to="/" className="btn btn-light my-3"> Retour </Link>
            <Row>
            <Col md={4} className="py-3 rounded" align="center">
                    <Image src={club.logo} alt={club.name} width="200" height="200" fluid/>
                    <h3><strong>{club.name}</strong></h3>

                </Col>
                <Col md={4} className="py-3">
                    <Card>
                <Col>
                    <div className="p-5">

                        <div> {club.stadium}</div>
                        <div>{club.website}</div>
                        <div>
                        Image src=league.country.flag alt=league.country.name width="52" height="52" roundedCircle/
                        <hr/>
                        club.country.name
                        <hr/>
                        
                        </div>
                        <div className="my-3">
                        <Rating value={club.rating} color={`#f8e825`} />
                        </div>
                    </div>
                    <div>
                        <ListGroup  as="ol" numbered>
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
                <Col md={4}>
                    <Coach id={club.coach} />
                </Col>
                <Row>
                    <Players id={club.id} />
                </Row>
            </Row>
        </div>
    )
}

export default Clubs_Detail_Screen
/*
            <Row>
                <Col md={6}>
                    <Image src={club.logo} alt={club.name} width="130" height="130" fluid/>

                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{club.name}</h3>
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                            Country: {club.country}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {club.website}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>test</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        test
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' disabled={club.countInStock===0} type='button'>Ajouter</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>*/