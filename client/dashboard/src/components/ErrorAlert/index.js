import React from 'react';
import { Alert } from "react-bootstrap";

const ErrorAlert = ({ children, errorMessage }) => {
    return (
        <Alert variant="danger">
            {errorMessage ? errorMessage : children}
        </Alert>
    );
};

export default ErrorAlert;
