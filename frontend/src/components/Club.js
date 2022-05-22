import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Club({ club }) {
    return (
			<div class="row" id="heading">
                <div id="heading-logo" style={{backgroundImage: `url(${club.logo})`}}>
                </div>
                <div class="col" id="heading-title">
                    <div id="title-club">{club.name}</div>
                    <div>
                        Siteweb : <a href={`${club.website}`}>{club.website}</a>
                    </div>
                </div>
                <div id="country-div">
                    <img src={`https://flagicons.lipis.dev/flags/1x1/${club.country}.svg`} alt={club.country} id="country-flag"/>
                </div>
            </div>
		
    )
}
/*
function Club({ club }) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/clubs/${club.code}`}>
                <div className="my-5">
                    <Card.Img src={club.logo} />
                </div>
            </Link>
            <Card.Body>
                <Link to={`/clubs/${club.code}`}>
                    <Card.Title as="div">
                        <strong>{club.name}</strong>
                    </Card.Title>
                </Link> 
                <Card.Text as="div">
                       Pays: {club.country}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
*/
export default Club