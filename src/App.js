import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import NavBar from './utils/navbar';
import Home from './comps/home/home';
import Blog from './comps/blog/blog';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
