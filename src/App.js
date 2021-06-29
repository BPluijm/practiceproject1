import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Links from './pages/Links';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
      <>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/sign-in" exact component={Menu}/>
          <Route path="/sign-up" exact component={Links}/>
          <Route path="/links" exact component={Contact}/>
        </Switch>
      </>
  );
}

export default App;
