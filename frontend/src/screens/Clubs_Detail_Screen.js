import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import axios from 'axios'

function Clubs_Detail_Screen({match}) {
    const [club, setClub]=useState([])
    const { id } = useParams();
    useEffect(()=>{
        async function fetchClub(){
            const {data} = await axios.get(`/api/clubs/${id}`)
            setClub(data)
        }
        fetchClub()
    },[])

    return (
        <div>
            <Link to="/" className="btn btn-light my-3"> Retour </Link>
            <Row>
                <Col md={6}>
                    <Image src={club.logo} alt={club.name} fluid/>
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
            </Row>
        </div>
    )
}

export default Clubs_Detail_Screen