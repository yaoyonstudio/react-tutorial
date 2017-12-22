import React, { Component } from 'react';

import Page from '../Page'

class Refs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      telephone: '',
      telephone2: ''
    }
    this.updateName = this.updateName.bind(this)
    this.updateTelephone = this.updateTelephone.bind(this)
    this.updateTelephone2 = this.updateTelephone2.bind(this)
  }

  updateName (e) {
    this.setState({
      name: e.target.value
    })
  }

  updateTelephone () {
    if (this.refs.telEl) {
      this.setState({
        telephone: this.refs.telEl.value
      })
    }
  }
  
  updateTelephone2 () {
    if (this.telEl2) {
      this.setState({
        telephone2: this.telEl2.value
      })
    }
  }

  componentDidMount () {
    if (this.nameEl) {
      this.nameEl.focus()
    }
  }

  render() {
    return (
      <Page title="Refs" router={this.props}>
        <div className="Main">
          <h1>Ref</h1>
          <p>ref在render()函数后、在componentDidMount函数前设置</p>
          <p>普通的DOM元素可以使用id来引用，使用ref可以用于引用复合组件</p>
          <hr />
          <h3>使用ref设置文本框自动获焦</h3>
          <input type="text" ref={nameEl => this.nameEl = nameEl} value={this.state.name} placeholder="请输入姓名" onChange={(e) => this.updateName(e)} />
          {this.state.name}

          <h3>使用ref实现数据绑定(ref使用字符串)</h3>
          <input type="telephone" ref="telEl" value={this.state.telephone} placeholder="请输入电话" onChange={() => this.updateTelephone()} />
          {this.state.telephone}
          <br />
          <h3>使用ref实现数据绑定(ref使用函数)</h3>
          <input type="telephone" ref={telEl2 => this.telEl2 = telEl2} value={this.state.telephone2} placeholder="请输入电话" onChange={() => this.updateTelephone2()} />
          {this.state.telephone2}
        </div>
      </Page>
    );
  }
}

export default Refs;
