import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Route } from "react-router";

import "./Dashboard.css";
import DashboardContainer from "./DashboardContainer";
import Sidebar from "./Sidebar";
import Orders from "./Orders";
import Products from "./Products";

const Dashboard = () => {
    return <Row className="dashboard">
        <Col md={2}>
            <Sidebar />
        </Col>
        <Col md={10}>
            <Route path="/products" component={Products} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={DashboardContainer} />
        </Col>
    </Row>;
};

export default Dashboard;