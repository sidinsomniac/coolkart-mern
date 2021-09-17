import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Header.css";
import { logoutUser } from "../../actions/auth.action";
import Snackbar from "../Snackbar";

const Header = () => {
    const authStore = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
    };

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">Dashboard</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {!authStore.authenticated ? (
                            (
                                <>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                </>
                            )
                        ) :
                            <Nav.Link onClick={logout}>Logout {authStore.user.username}</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {authStore.errorMessages?.message && <Snackbar errorMessage={authStore.errorMessages?.message} />}
        </>
    );
};

export default Header;
