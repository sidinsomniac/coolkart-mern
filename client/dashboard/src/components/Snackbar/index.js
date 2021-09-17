import React from 'react';
import { useDispatch } from "react-redux";
import { Toast, ToastContainer } from "react-bootstrap";
import { resetAuthError } from "../../actions/auth.action";
import "./Snackbar.css";

function Snackbar({ errorMessage }) {
    const dispatch = useDispatch();

    const resetError = () => {
        dispatch(resetAuthError());
    };

    return (
        <ToastContainer position="bottom-end" className="p-3">
            <Toast onClose={resetError}>
                <Toast.Header>
                    Looks like there has been some error
                </Toast.Header>
                <Toast.Body>
                    {errorMessage}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default Snackbar;
