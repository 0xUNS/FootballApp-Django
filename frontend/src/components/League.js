import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function League({ league }) {
    return (
		<div class="row" id="card-league">
            <div class="row" id="card-logo-container">
            <div id="card-logo" style={{backgroundImage: `url(${league.logo})`}}>
            </div>
        </div>
        <div class="row" id="card-container">
                {league.name}
        </div>
        <div class="row">
            <div class="col" id="confed-div">{league.confederation}</div>
            <div class="col" id="country-div">
                <img src={`https://flagicons.lipis.dev/flags/1x1/${league.country}.svg`} alt={league.country} id="country-flag"/>
            </div>
            </div>
        </div>
    )
}

/*
function League({ league }) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/ligues/${league.code}`}>
                <Card.Img src={league.logo} />
            </Link>
            <Card.Body>
                <Link to={`/ligues/${league.code}`}>
                    <Card.Title as="div">
                        <strong>{league.name}</strong>
                    </Card.Title>
                </Link> 
                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={league.rating} text={`${league.numReviews} avis`} color={`#f8e825`} />
                    </div>
                </Card.Text>
                <Card.Text as="h3">
                    <div class="col-6" >
                        {league.confederation}
                    </div>
                    <div class="col-6" >
                    
                    <Button variant="primary" style={{backgroundImage: `url("https://flagicons.lipis.dev/flags/1x1/${league.country}.svg")` }}>
                        &nbsp;
                    </Button>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
*/
export default League