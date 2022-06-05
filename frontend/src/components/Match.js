import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function Match({ match }) {
    const d = new Date();
    return (
        <Row className="match_list">
            <div className="list-group-item d-flex justify-content-between align-items-center">
                <Link to={`/ligues/${match.competition?.code}`}>
                <Image src={match.competition.logo} alt={match.competition.name} width="30" height="30" fluid/> &nbsp; 
                {match.competition.name}
                </Link>
                <a href={`https://twitter.com/intent/tweet?text=%23${match.team_h?.code}${match.team_a?.code}%20${match.team_h?.name}%20vs%20${match.team_a?.name}%20%3A`} target="_blank" rel="noreferrer">
                <i class="fa-brands fa-twitter"></i> Tweet</a>
            </div>
            <Row>
                <Col className="games-list">
                <Link to={`/clubs/${match.team_h?.code}`}>
                    <Image src={match.team_h?.logo} alt={match.team_h?.name} width="60" height="60" fluid/>
                </Link>
                    <div>
                        <Link to={`/clubs/${match.team_h?.code}`}>
                            {match.team_h?.name}
                        </Link>
                    </div>
                </Col>
                <Col className="text-center">
                <div className="games-score">
                {match.n_goals_h} &nbsp; - &nbsp; {match.n_goals_a}
                </div>
                <div className="badge rounded-pill bg-danger">Live</div>
                <div className="games-time">{d.getDate()} / {d.getMonth() + 1} / {d.getFullYear()}</div>
                <div><Rating value={match.rating} color={`#f8e825`} />
</div>
                </Col>
                <Col className="games-list">
                <Link to={`/clubs/${match.team_a.code}`}>
                    <Image src={match.team_a?.logo} alt={match.team_a?.name} width="60" height="60" fluid/>
                </Link>
                    <div>
                <Link to={`/clubs/${match.team_a.code}`}>
                    {match.team_a?.name}
                </Link>
                    </div>
                </Col>
            </Row>
        </Row>
    )
}

export default Match