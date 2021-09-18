import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Route } from "react-router";

import "./Dashboard.css";
import DashboardContainer from "./DashboardContainer";
import Sidebar from "./Sidebar";
import Orders from "./Orders";
import Products from "./Products";
import Categories from "./Categories";
import { getAllCategories } from "../../actions/category.action";

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Row className="dashboard">
        <Col md={2}>
            <Sidebar />
        </Col>
        <Col md={10}>
            <Route path="/categories" component={Categories} />
            <Route path="/products" component={Products} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={DashboardContainer} />
        </Col>
    </Row>;
};

export default Dashboard;