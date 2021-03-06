import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import NavBar from "./components/NavBar";

function App() {
  return (
      <>
          <NavBar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/menu" exact component={Menu}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
      </>
  );
}

export default App;
