import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import { Container } from "react-bootstrap";
import './App.css';

import AuthGuard from "./components/AuthGuard";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import { useEffect } from "react";
import { isUserLoggedIn } from "./actions/actionCreators";

const App = () => {

  const dispatch = useDispatch();
  const authStore = useSelector(state => state.auth);

  useEffect(() => {
    if (!authStore.authenticated) dispatch(isUserLoggedIn());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="App">
      <Header />
      <Container>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <AuthGuard path="/" component={Dashboard} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
