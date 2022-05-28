import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Match({ match }) {
    const d = new Date();
    return (
        <Row className="my-3">
            <div>
                <Link to={`/ligues/${match.competition.code}`}>
                <Image src={match.competition.logo} alt={match.competition.name} width="30" height="30" fluid/> &nbsp; 
                {match.competition.name}
                </Link>
            </div>
            <Row>
                <Col className="games-list">
                <Link to={`/clubs/${match.team_h.code}`}>
                    <Image src={match.team_h.logo} alt={match.team_h.name} width="60" height="60" fluid/>
                </Link>
                    <div>
                <Link to={`/clubs/${match.team_h.code}`}>
                    {match.team_h.name}
                </Link>
                    </div>
                </Col>
                <Col className="text-center">
                <div className="games-score">
                {match.n_goals_h} &nbsp; - &nbsp; {match.n_goals_a}
                </div>
                <div className="badge rounded-pill bg-danger">Live</div>
                <div className="games-time">{d.getDay()} - {d.getMonth()} - {d.getFullYear()}</div>
                </Col>
                <Col className="games-list">
                <Link to={`/clubs/${match.team_a.code}`}>
                    <Image src={match.team_a.logo} alt={match.team_a.name} width="60" height="60" fluid/>
                </Link>
                    <div>
                <Link to={`/clubs/${match.team_a.code}`}>
                    {match.team_a.name}
                </Link>
                    </div>
                </Col>
            </Row>
        </Row>
    )
}

export default Match