import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import NavBar from './utils/navbar';
import Home from './comps/home/home';
import Blog from './comps/blog/blog';
import BlogHandle from './handle/blogHandle';
import ArticleHandle from './handle/articleHandle';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:handle" component={BlogHandle} />
          <Route exact path="/blog/:handle/:handle" component={ArticleHandle} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
