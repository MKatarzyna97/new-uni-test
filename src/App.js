import React from 'react';
import './App.css';

import About from "./components/about";
import Navbar from "./components/myRouterComponents/navbar";
import Profile from "./components/profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from "./trial";
import Shop from "./Shop"


function App() {
  return (
    <Router>
    <div className="App">
       <Navbar />
      <Switch>
          
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={Category} />
          <Route path="/home/:id" component={Category} />
      </Switch>
 
    </div>
    </Router>
  );
}

export default App;
