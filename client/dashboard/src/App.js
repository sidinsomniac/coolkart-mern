import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container } from "react-bootstrap";
import './App.css';

import AuthGuard from "./components/AuthGuard";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <AuthGuard path="/" component={Dashboard} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
