import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repo from './modules/Repo'
import Repos from './modules/Repos'
import Home from './modules/Home'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/repos" component={Repos}/>
    <Route path="/repos/:userName/:repoName" component={Repo}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'));
