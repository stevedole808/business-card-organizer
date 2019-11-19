import React from "react";
import Register from "./Components/Register";
import "./App.css";
import Header from "./Components/Header";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return(
    <Router> 
      <div className="App">
        <Header />
        <Route exact path='/' component={Register} />
        <Route path='/login' component={Login} />
      </div>
    </Router>
  )
}

export default App;
