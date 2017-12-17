import React, { Component } from 'react';

class Child5 extends Component {
  render() {
    return (
      <div className="Child">
        <p>Child5组件</p>
        <p>Child5接收参数<span>{this.props.value}</span></p>
        <button onClick={() => this.props.changeChild6()}>Child5通过父组件传递方法控制Child6组件状态</button>
        <button onClick={() => this.props.passParamsToChild6('来自Child5的数据')}>Child5通过父组件传递方法传递数据给Child6组件</button>
      </div>
    );
  }
}

export default Child5;
