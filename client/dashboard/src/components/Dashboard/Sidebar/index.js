import React from 'react';
import { ListGroup, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {

    const currentPage = window.location.href.split(':4000/')[1];

    return (
        <div className="sidebar-menu">
            <ListGroup variant="flush">
                <ListGroup.Item className={currentPage === "" ? "active-menu" : ""}>
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item className={currentPage === "products" ? "active-menu" : ""}>
                    <Nav.Link as={Link} to="/products">
                        Products
                    </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item className={currentPage === "categories" ? "active-menu" : ""}>
                    <Nav.Link as={Link} to="/categories">
                        Categories
                    </Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item className={currentPage === "orders" ? "active-menu" : ""}>
                    <Nav.Link as={Link} to="/orders">
                        Orders
                    </Nav.Link>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Sidebar;