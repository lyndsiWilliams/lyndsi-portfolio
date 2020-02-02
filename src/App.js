// React
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
// Styling
import './App.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
