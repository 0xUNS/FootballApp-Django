import React from 'react';
import { Link } from 'react-router-dom';

function League({ league }) {
    return (
        <Link to={`/ligues/${league.code}`}>
		<div className="row" id="card-league">
            <div className="row" id="card-logo-container">
                <div id="card-logo" style={{backgroundImage: `url(${league.logo})`}}></div>
            </div>
            <div className="row" id="card-container">{league.name}</div>
            <div className="row">
                <div className="col" id="confed-div">{league.confederation}</div>
                <div id="country-div" style={{backgroundImage: `url(${league.country?.flag})`}}></div>
            </div>
        </div>
        </Link>
    )
}

export default League