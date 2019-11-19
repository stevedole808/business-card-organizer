import React from "react";
import Register from "./Components/Register";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return(
    <Router> 
      <div className="App">
        <Header />
        <Route exact path='/' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
      </div>
    </Router>
  )
}

export default App;
