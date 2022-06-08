import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            navigate(`/search/${keyword}`, {replace: true});
        }
    }
    return (
        <Form onSubmit={submitHandler} className="d-flex" inline>
            <Form.Control type='text' name='q' onChange={(e) => setKeyword(e.target.value)} className='mr-sm-2 ml-sm-5'></Form.Control>
            <Button type='submit' variant='outline-success' className='px-3'><i class="fa fa-magnifying-glass"></i></Button>
        </Form>
    )
}

export default SearchBox