import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import axios from 'axios'

function LeagueScreen({match}) {
    const [league, setLeague]=useState([])
    const { id } = useParams();
    useEffect(()=>{
        async function fetchLeague(){
            const {data} = await axios.get(`/api/leagues/${id}`)
            setLeague(data)
        }
        fetchLeague()
    },[])

    return (
        <div>
            <Link to="/" className="btn btn-light my-3"> Retour </Link>
            <Row>
                <Col md={6}>
                    <Image src={league.image} alt={league.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{league.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: $ {league.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {league.description}
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
                                        <strong>$ {league.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {league.countInStock>0?'Disponible en stock':'Rupture de stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' disabled={league.countInStock===0} type='button'>Ajouter</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default LeagueScreen