import React, { Component } from 'react';

class Child6 extends Component {
  render() {
    return (
      <div className="Child">
        <p>Child6组件</p>
        <p>Child6接收参数<span>{this.props.value}</span></p>
        <button onClick={() => this.props.changeChild5()}>Child6通过父组件传递方法控制Child5组件状态</button>
        <button onClick={() => this.props.passParamsToChild5('来自Child6的数据')}>Child6通过父组件传递方法传递数据给Child5组件</button>
      </div>
    );
  }
}

export default Child6;
