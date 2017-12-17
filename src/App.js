import React, { Component } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import './App.css';
import routes from './routes'
import Menu from './components/partial/Menu'

import Posts from './components/Router/Posts'
import Post from './components/Router/Post'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/posts" component={Posts} />
            <Route path= "/posts/:id" render={(history) => !history.match.params.id || !parseInt(history.match.params.id) ? <Redirect to="/posts" /> : <Post router={history} />} />

            {routes.map((route, i) => <Route key={i} exact path={route.path} component={route.component} />)}          
          </Switch>
          <Menu router={history} />
        </div>
      </Router>
    );
  }
}

export default App;
