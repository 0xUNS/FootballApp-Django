import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Club from '../components/Club';
import axios from 'axios';

function Clubs_List_Screen() {
    const [clubs, setClubs]=useState([])
    useEffect(()=>{
        async function fetchClubs(){
            const {data} = await axios.get('/api/clubs/')
            setClubs(data)
        }
        fetchClubs()
    },[])
    return (
        <div className="container">
            <Col md={8}>
                <Row className="py-4">
                <h2>Les Equipes</h2>
                    {clubs?.map(club =>(
                        <Club club={club} />
                    ))}
                </Row>
            </Col>
        </div>
    )
}

export default Clubs_List_Screen
