import React, { Component } from 'react';

class Child3 extends Component {
  render() {
    return (
      <div className="Child">
        <p>Child3组件：定义了默认参数</p>
        <p>如果父组件传入了与子组件定义相同的参数，则以父组件传入参数为准</p>
        <p>Child3子组件自定义默认参数：<span>{this.props.name}</span></p>
        <p>父级组件传入参数：<span>{this.props.value}</span></p>
      </div>
    );
  }
}

Child3.defaultProps = {
  name: '这是Child3组件自定义参数name',
  value: '这是Child3组件自定义参数value'
}

export default Child3;
