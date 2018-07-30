import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import Home from './pages/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to CiderChain</h1>
        </header>

      </div>
      <nav className="menu">
        <NavLink className="menu-item" exact to="/">
          Snapshot
        </NavLink>
      </nav>
      <div className="two-thirds column">
        <Route exact path="/" component={Home} />
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
