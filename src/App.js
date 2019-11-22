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
import CardCollection from "./Components/CardCollection"
import EditUserCard from "./Components/EditUserCard";
import Confirm from './Components/Confirm';
import Form from './Components/NewCard'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <PrivateRoute path="/protected" component={Dashboard} />
          <Route exact path="/" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/scanner" render={props => <Scanner {...props} />} />
          <Route path="/bizcard" component={BizCard} />
          <Route path='/collection' component={CardCollection} />
          <Route path='/editusercard' component={EditUserCard} />
          <Route path='/confirm' render={props => <Confirm {...props} />} />
          <Route path='/newcard' component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
