import React, { Component } from 'react';

import Page from '../Page'
import ChildLifecycle from './materials/ChildLifecycle'

class Lifecycle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      num: 0,
      value: 100
    }
    console.log('constructor')
    this.update = this.update.bind(this)
    this.updateChild = this.updateChild.bind(this)
  }

  update () {
    console.log('更新本组件后')
    this.setState({
      value: 1000
    })
  }

  updateChild () {
    console.log('更新子组件后')
    this.setState({
      name: 'ken',
      num: 10
    })
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
    return (
      <Page title="Lifecycle" router={this.props}>
        <div className="Main">
          <p>组件生命周期</p>
          <ChildLifecycle value={this.state.num} name={this.state.name} />
          <p>本组件：{this.state.value}</p>
          <button onClick={() => this.update()}>更新组件</button>
          <button onClick={() => this.updateChild()}>更新子组件</button>
        </div>
      </Page>
    );
  }
}

export default Lifecycle;
