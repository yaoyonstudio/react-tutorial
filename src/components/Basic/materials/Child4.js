import React, { Component } from 'react';

class Child4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cValue: 100
    }
    this.change = this.change.bind(this)
  }

  change () {
    this.setState({
      cValue: this.state.cValue + 10
    })
  }

  render() {
    return (
      <div className="Child">
        <p>Child4组件</p>
        <p>Child4接收父级参数<span>{this.props.value}</span></p>
        <p>Child4自已的状态<span>{this.state.cValue}</span></p>
        <button onClick={() => this.change()}>子组件改变自身状态</button>
        <button onClick={() => this.props.changePvalue()}>子组件调用属性方法改变父级状态</button>
        <button onClick={() => this.props.passParamsToParent(this.state.cValue)}>子组件调用属性方法并传值给父级</button>
      </div>
    );
  }
}

export default Child4;
