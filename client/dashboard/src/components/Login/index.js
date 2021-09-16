import React from 'react';
import { useDispatch } from "react-redux";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { loginUser } from "../../actions/actionCreators";

const Login = () => {

    const dispatch = useDispatch();

    const login = e => {
        e.preventDefault();
        dispatch(loginUser({
            username: "Siddhartha",
            email: "sid@mail.com",
            password: "qwerty1234"
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

export default Login;