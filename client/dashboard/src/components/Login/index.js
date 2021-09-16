import React from 'react';
import { Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Card, Spinner } from "react-bootstrap";

import { loginUser } from "../../actions/actionCreators";
import { useInput } from "../../services/custom-hooks";
import "./Login.css";

const Login = props => {

    const dispatch = useDispatch();
    const username = useInput("text", "", "Enter Username");
    const password = useInput("password", "", "Enter Password");
    const authStore = useSelector(state => state.auth);

    if (authStore.authenticated) return <Redirect to="/" />;

    const login = e => {
        e.preventDefault();
        dispatch(loginUser({
            username: username.value,
            password: password.value
        }));
        username.setValue("");
        password.setValue("");
    };

    return (
        <Row className="my-5">
            <Col></Col>
            <Col xs={4}>
                <Card>
                    <Card.Body className="login-card">
                        <Card.Title>Login</Card.Title>
                        {
                            authStore.loading ? (
                                <Spinner className="loader" animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            ) : (
                                <Form onSubmit={login}>
                                    <Form.Group className="mb-3" controlId="formBasicUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control {...username} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control {...password} />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            )
                        }
                    </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>
    );
};

export default Login;