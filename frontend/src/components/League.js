import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function League({ league }) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/league/${league._id}`}>
                <Card.Img src={league.image} />
            </Link>
            <Card.Body>
                <Link to={`/league/${league._id}`}>
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
                    $ {league.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default League