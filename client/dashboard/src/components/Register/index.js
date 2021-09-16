import React from 'react';
import { Redirect } from "react-router";
import { useSelector } from "react-redux";

import { Form, Button, Row, Col, Card } from "react-bootstrap";

const Register = () => {
    const authStore = useSelector(state => state.auth);

    if (authStore.authenticated) {
        return <Redirect to="/" />;
    }

    return (
        <Row className="my-5">
            <Col></Col>
            <Col xs={6}>
                <Card>
                    <Card.Body>
                        <Card.Title>Register</Card.Title>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
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

export default Register;
