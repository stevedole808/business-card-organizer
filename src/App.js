import React from "react";
import Register from "./Components/Register";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Scanner from "./Components/Scanner"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Components/Dashboard";
import Card from "./Components/Card"
import CardList from "./Components/CardList"

function App() {
  return(
    <Router> 
      <div className="App">
        <Header />
        <Switch>
          <PrivateRoute path="/protected" component={Dashboard} />
          <Route exact path="/" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/scanner" component={Scanner} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
