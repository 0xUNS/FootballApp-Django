import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Club({ club }) {
    return (
        <Row className="card-club">
            <Col>
                <Link to={`/clubs/${club.code}`}>
                    <Image src={club.logo} alt={club.name} width="100" height="100" fluid/>
                </Link>
            </Col>
            <Col xs={6}>
                <Link to={`/clubs/${club.code}`}>
                    <h3>{club.name}</h3>
                </Link>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16"><path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/><path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/></svg> &nbsp;
                    stade: {club.stadium}
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg> &nbsp;
                    coach: {club.coach} 
                </div>
            </Col>
                    
            <Col align="center">
                <div id="country-div" style={{backgroundImage: `url(${club.country?.flag})`}}></div>
                <p>{club.country?.name}</p>
            </Col>
        </Row>
    )
}

export default Club