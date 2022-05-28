import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>E-Vente</Navbar.Brand>
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
                        <LinkContainer to="https://github.com/0xUNS/FootballApp-Django">
                        <Nav.Link><i class="fa-brands fa-github"></i> Github </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/admin">
                        <Nav.Link><i class="fa fa-user-gear"></i> Admin </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                        <Nav.Link><i class="fa fa-circle-info"></i> A propos </Nav.Link>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header

/*

<i class="fa-solid fa-medal"></i>
<i class="fa-solid fa-ranking-star"></i>
<i class="fa-solid fa-goal-net"></i>

*/