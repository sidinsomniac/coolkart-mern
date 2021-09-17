import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { isUserLoggedIn } from "./actions/actionCreators";
import AuthGuard from "./components/AuthGuard";
import Dashboard from "./components/Dashboard";

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
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <AuthGuard component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;
