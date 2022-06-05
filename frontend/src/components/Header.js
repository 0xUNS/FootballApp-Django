import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBox from './SearchBox'
import { Alert } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Football News</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/clubs">
                        <Nav.Link><i className="fa fa-shield"></i> Equipes </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/ligues">
                        <Nav.Link><i className="fa fa-futbol"></i> Ligues </Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav className="ms-auto">
                        <>
                        <Nav.Link href="https://github.com/0xUNS/FootballApp-Django"><i class="fa-brands fa-github"></i> Github </Nav.Link>
                        </>
                        <>
                        <Nav.Link href="http://127.0.0.1:8000/admin/"><i class="fa fa-user-gear"></i> Admin </Nav.Link>
                        </>
                        <LinkContainer to="/about">
                        <Nav.Link><i class="fa fa-circle-info"></i> A propos </Nav.Link>
                        </LinkContainer>
                    <SearchBox />
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <Alert variant="warning">
                <strong>Le site web est en cours de développement. </strong>
                Pour tout renseignement rendez-vous sur
                <Alert.Link href="https://github.com/0xUNS/FootballApp-Django" target="_blank"> GitHub.</Alert.Link>
                </Alert>
        </header>
    )
}

export default Header

/*

<i class="fa-solid fa-medal"></i>
<i class="fa-solid fa-ranking-star"></i>
<i class="fa-solid fa-goal-net"></i>

*/