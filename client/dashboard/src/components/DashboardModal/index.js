import React from "react";
import { Modal } from "react-bootstrap";

const DashboardModal = ({ show, setShow, children, heading }) => {
    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );
};

export default DashboardModal;