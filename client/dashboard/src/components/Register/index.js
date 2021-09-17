import React from 'react';
import { Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Row, Col, Card, Spinner } from "react-bootstrap";

import { useInput } from "../../services/custom-hooks";
import { registerUser } from "../../actions/actionCreators";
import ErrorAlert from "../ErrorAlert";

const Register = () => {

    const dispatch = useDispatch();
    const authStore = useSelector(state => state.auth);
    const regStore = useSelector(state => state.reg);
    const username = useInput("text", "", "Enter Username", regStore.errorMessages.username);
    const email = useInput("email", "", "Enter Email", regStore.errorMessages.email);
    const password = useInput("password", "", "Enter Password", regStore.errorMessages.password);

    if (authStore.authenticated) return <Redirect to="/" />;

    const register = e => {
        e.preventDefault();
        dispatch(registerUser({
            username: username.value,
            email: email.value,
            password: password.value
        }));
        username.resetval();
        email.resetval();
        password.resetval();
    };

    return (
        <Row className="my-5">
            <Col></Col>
            <Col xs={6}>
                <Card>
                    <Card.Body>
                        <Card.Title>Register</Card.Title>

                        {(regStore.errorMessages.errors?.length || regStore.errorMessages[0]?.message) ? (
                            <ErrorAlert errorMessage={regStore.errorMessages[0]?.message}>
                                <ul>
                                    {regStore.errorMessages.errors?.map(error => <li key={error?.message}>{error?.message}</li>)}
                                </ul>
                            </ErrorAlert>
                        ) : null}

                        {
                            regStore.loading ? (
                                <Spinner className="loader" animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            ) : (
                                <Form onSubmit={register}>
                                    <Form.Group className="mb-3" controlId="formBasicUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control {...username} resetval="" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control {...email} resetval="" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control {...password} resetval="" />
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

export default Register;
