import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Team({ team }) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/team/${team._id}`}>
                <Card.Img src={team.image} />
            </Link>
            <Card.Body>
                <Link to={`/team/${team._id}`}>
                    <Card.Title as="div">
                        <strong>{team.name}</strong>
                    </Card.Title>
                </Link> 
                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={team.rating} text={`${team.numReviews} avis`} color={`#f8e825`} />
                    </div>
                </Card.Text>
                <Card.Text as="h3">
                    $ {team.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Team