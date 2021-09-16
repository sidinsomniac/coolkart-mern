import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Header.css";
import { logoutUser } from "../../actions/actionCreators";

const Header = () => {
    const authStore = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Dashboard</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    ({!authStore.authenticated ? (
                        <>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        </>
                    ) :
                        <Nav.Link onClick={logout}>Logout</Nav.Link>
                    })
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
