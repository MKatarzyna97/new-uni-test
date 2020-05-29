import React from 'react';
import './App.css';

import About from "./components/about";
import Navbar from "./components/myRouterComponents/navbar";
import Galeria from "./components/galeria";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from "./trial";
import Home from "./components/home";
import Inspiration from "./components/Inspiration";
import GoodDoggo from './components/gooddoggo';
import BadDoggo from './components/baddoggo';



function App() {
  return (
    <Router>
    <div className="App">
       <Navbar />
      <Switch>
          
          <Route path="/about" component={About} />
          <Route path="/galeria" component={Galeria} />
          <Route path="/home" component={Home} />
          <Route path="/inspiration/" component={Inspiration} />
          <Route path="/inspiration/:id" exact component={Category} />
          <Route path="/gooddoggo" component={GoodDoggo} />
          <Route path="/baddoggo" component={BadDoggo} />
          
      </Switch>
 
    </div>
    </Router>
  );
}

export default App;
