import React from 'react';
import { useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';

const AuthGuard = ({ component: Component, ...rest }) => {
    const { user } = useSelector(state => state.auth);

    return (
        <Route {...rest} render={props => user.username ? <Component {...props} /> : <Redirect to="/login" />} />
    );
};

export default AuthGuard;
