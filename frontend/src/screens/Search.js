import React from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';


function Search() {
    const { keyword } = useParams();

    return (
        <div className="container">
            <h3 className='text-danger'>'{keyword}' est introuvable</h3>
            
            <Alert variant="warning">
                Si vous pensez qu'il s'agit d'une erreur n'hésitez pas a contacter le developpeur sur
                <Alert.Link href="https://github.com/0xUNS/FootballApp-Django"> GitHub.</Alert.Link>
            </Alert>
        </div>
    )
}

export default Search
