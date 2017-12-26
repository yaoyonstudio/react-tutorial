import React, { Component } from 'react';

import Page from '../../Page'
import SideMenu from './SideMenu'

class SideMenuPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSide: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      showSide: !this.state.showSide
    })
  }
  
  render() {
    return (
      <Page title="SideMenu" router={this.props}>
        <div className="Main">
          <button onClick={() => this.toggle()}>切换</button>
          {this.state.showSide && <SideMenu toggle={() => this.toggle()} />}
        </div>
      </Page>
    );
  }
}

export default SideMenuPage;
