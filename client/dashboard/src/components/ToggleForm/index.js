import React from "react";
import { Accordion, Card } from "react-bootstrap";

import CustomToggle from "./CustomToggle";

const ToggleForm = ({ children }) => {
    return (
        <Accordion defaultActiveKey="">
            <CustomToggle eventKey="0">Add Product</CustomToggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    {children}
                </Card.Body>
            </Accordion.Collapse>
        </Accordion>
    );
};

export default ToggleForm;