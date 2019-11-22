import React, { useState } from "react";
import Register from "./Components/Register";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Scanner from "./Components/Scanner";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Components/Dashboard";
import { BizCard } from "./Components/BizCard";
import CardCollection from "./Components/CardCollection";
import EditUserCard from "./Components/EditUserCard";
import Confirm from "./Components/Confirm";
import Form from "./Components/NewCard";
import CardList from "./Components/CardList";
import AddNewCard from "./Components/AddNewCard";
function App() {
  const [cards, setCards] = useState([]);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <PrivateRoute path="/protected" component={Dashboard} />
          <Route exact path="/" component={Register} />
          <Route path="/login" component={Login} />
          <Route
            path="/editusercard/:id"
            render={props => (
              <EditUserCard {...props} setCards={setCards} cards={cards} />
            )}
          />
          <Route
            path="/addnewcard/:id"
            render={props => (
              <AddNewCard {...props} setCards={setCards} cards={cards} />
            )}
          />
          <Route path="/scanner" render={props => <Scanner {...props} />} />
          <Route path="/bizcard" component={BizCard} />
          <Route path="/collection" component={CardCollection} />
          <Route path="/confirm" render={props => <Confirm {...props} />} />
          <Route path="/newcard" component={Form} />
          <Route path="/cardlist" component={CardList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
