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
                        <LinkContainer to="/teams">
                        <Nav.Link><i className='fas fa-shopping-cart'></i> Equipes </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/leagues">
                        <Nav.Link><i className='fas fa-shopping-cart'></i> Leagues </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                        <Nav.Link><i className='fas fa-user'></i> Login </Nav.Link>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
