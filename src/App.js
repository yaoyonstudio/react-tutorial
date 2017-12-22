import React, { Component } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import './App.css';
import routes from './routes'
import Menu from './components/partial/Menu'

// import PostList from './components/Practice/InfiniteScroll/PostList'
// import Posts from './components/Practice/InfiniteScroll/Posts'
// import Post from './components/Practice/InfiniteScroll/Post'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            {/* <Route exact path="/postlist" component={PostList} />
            <Route exact path="/posts" component={Posts} />
            <Route path= "/posts/:id" render={(history) => !history.match.params.id || !parseInt(history.match.params.id, 10) ? <Redirect to="/posts" /> : <Post router={history} />} /> */}

            {routes.map((route, i) => <Route key={i} exact path={route.path} component={route.component} />)}          
          </Switch>
          <Menu router={history} />
        </div>
      </Router>
    );
  }
}

export default App;
