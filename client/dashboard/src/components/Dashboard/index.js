import React from 'react';
import { Row, Col } from "react-bootstrap";

import "./Dashboard.css";

const Dashboard = () => {
    return (
        <Row className="dashboard">
            <Col md={2} className="sidebar p-3">
                Sidebar
            </Col>
            <Col md={10} className="dashboard-container p-3">
                Container
            </Col>
        </Row>
    );
};

export default Dashboard;
