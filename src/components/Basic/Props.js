import React, { Component } from 'react';

import Page from '../Page'
import Child1 from './materials/Child1'
import Child2 from './materials/Child2'
import Child3 from './materials/Child3'

class Props extends Component {
  render() {
    return (
      <Page title="Props" router={this.props}>
        <div className="Main">
          <Child1 />
          <Child2 value="这是传递给Child2组件的参数" />
          <Child3 value="这是传递给Child3组件的参数" />
        </div>
      </Page>
    );
  }
}

export default Props;
