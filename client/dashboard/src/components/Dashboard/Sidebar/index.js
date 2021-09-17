import React from 'react';
import { ListGroup, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar-menu">
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Nav.Link as={Link} to="/products">
                        Products
                    </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Nav.Link as={Link} to="/orders">
                        Orders
                    </Nav.Link>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Sidebar;