import React, { Component } from 'react';

import Rheader from './partial/Rheader'

class Page extends Component {
  render() {
    return (
      <div className="Page">
        <Rheader title={this.props.title} router={this.props.router} />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
