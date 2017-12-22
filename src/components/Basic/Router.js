import React, { Component } from 'react';

import Page from '../Page'
import Child1 from './materials/Child1'
import Child2 from './materials/Child2'
import Child3 from './materials/Child3'

class Router extends Component {
  render() {
    return (
      <Page title="React Router v4" router={this.props}>
        <div className="Main">
          React Router
        </div>
      </Page>
    );
  }
}

export default Router;
