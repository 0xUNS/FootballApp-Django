import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

function TeamScreen({match}) {
    const [team, setTeam]=useState([])
    const { id } = useParams();
    useEffect(()=>{
        async function fetchTeam(){
            const {data} = await axios.get(`/api/teams/${id}`)
            setTeam(data)
        }
        fetchTeam()
    },[])

    return (
        <div>
            <Link to="/" className="btn btn-light my-3"> Retour </Link>
            <Row>
                <Col md={6}>
                    <Image src={team.image} alt={team.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{team.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={team.rating} text={`${team.numReviews} étoiles`} color={`#f8e825`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: $ {team.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {team.description}
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
                                        <strong>$ {team.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {team.countInStock>0?'Disponible en stock':'Rupture de stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' disabled={team.countInStock===0} type='button'>Ajouter</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default TeamScreen