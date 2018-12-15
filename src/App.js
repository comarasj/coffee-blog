import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import NavBar from './utils/navbar';
import Home from './comps/home/home';
import Blog from './comps/blog/blog';
import Professional from './comps/professional/professional';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/professional" component={Professional} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
