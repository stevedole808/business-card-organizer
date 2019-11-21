import React from "react";
import Register from "./Components/Register";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Scanner from "./Components/Scanner"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Components/Dashboard";
import {BizCard} from "./Components/BizCard"
import CardList from "./Components/CardList"
import EditUserCard from "./Components/EditUserCard"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <PrivateRoute path="/protected" component={Dashboard} />
          <Route exact path="/" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/scanner" component={Scanner} />
          <Route path="/bizcard" component={BizCard} />
          <Route path="/cardlist" component={CardList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
