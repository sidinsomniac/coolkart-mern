import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="#link">Logout</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
