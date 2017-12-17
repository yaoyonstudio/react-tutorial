import React, { Component } from 'react';

import Page from '../Page'

class Refs extends Component {
  render() {
    return (
      <Page title="Refs" router={this.props}>
        <div className="Main">
          Refs
        </div>
      </Page>
    );
  }
}

export default Refs;
