import React, { Component } from 'react';

class ChildLifecycle extends Component {
  constructor (props) {
    super(props)
    console.log('--ChildLifecycle Constructor')
  }

  componentWillMount () {
    console.log('--ChildLifecycle componentWillMount')
  }

  componentDidMount () {
    console.log('--ChildLifecycle componentDidMount')
  }

  componentWillUnmount () {
    console.log('--ChildLifecycle componentWillUnmount')
  }

  componentWillReceiveProps () {
    console.log('--ChildLifecycle componentWillReceiveProps')
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('-1-ChildLifecycle shouldComponentUpdate')
    console.log(nextProps)
    console.log(nextState)
    console.log(this.props)
    console.log('-2-ChildLifecycle shouldComponentUpdate')
    // shouldComponentUpdate必须返回一个逻辑值（true||false），默认是true，即属性和状态变更都会重新渲染组件
    // 如果返回false，componentWillUpdate，render和componentDidUpdate不会触发，属性和状态变更也不会发生变化
    
    // 应该注意的是，当父组件状态发生变更，则子组件不管有没有发生变更，都会触发。
    // 如果子组件只是接收父组件传入的参数，我们只想让子组件在参数发生变更时才更新渲染子组件（即触发componentWillUpdate，render和componentDidUpdate），可以在这个事件中进行判断，判断原传入参数this.props.value与将要发生变化的参数nextProps.value是否一致，如果不一致，则重新渲染，返回true，如果一致，则返回false，不触发后面的事件。实现代码如下:
    if (this.props.value === nextProps.value) {
      return false
    }
    return true
  }
  
  componentWillUpdate () {
    console.log('--ChildLifecycle componentWillUpdate')
  }
  
  componentDidUpdate () {
    console.log('--ChildLifecycle componentDidUpdate')
  }
  
  componentDidCatch () {
    console.log('--ChildLifecycle componentDidCatch')
  }

  render() {
    console.log('--ChildLifecycle render')
    return (
      <div className="Child">
        <p>ChildLifecycle</p>
        <p>参数：<span>{this.props.value}</span></p>
        <p>参数：<span>{this.props.name}</span></p>
      </div>
    );
  }
}

export default ChildLifecycle;
