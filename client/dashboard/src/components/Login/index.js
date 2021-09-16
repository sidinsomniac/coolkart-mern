import React from 'react';
import { useDispatch } from "react-redux";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

import { loginUser } from "../../actions/actionCreators";
import { useInput } from "../../services/custom-hooks";
// import { useState } from "react";

const Login = () => {

    const dispatch = useDispatch();
    const username = useInput("text", "", "Enter Username");
    const password = useInput("password", "", "Enter Password");
    // const [error, setError] = useState();

    const login = e => {
        e.preventDefault();
        dispatch(loginUser({
            username: username.value,
            password: password.value
        }));
    };

    return (
        <Row className="my-5">
            <Col></Col>
            <Col xs={6}>
                <Card>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
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
                    </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>
    );
};

export default Login;