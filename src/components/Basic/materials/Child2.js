import React, { Component } from 'react';

class Child2 extends Component {
  render() {
    return (
      <div className="Child">
        <p>Child2组件</p>
        <p>Child2接收参数<span>{this.props.value}</span></p>
      </div>
    );
  }
}

export default Child2;
