import React from "react";
import { useAccordionButton, Button } from "react-bootstrap";

const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
        <Button onClick={decoratedOnClick}>
            {children}
        </Button>
    );
};

export default CustomToggle;