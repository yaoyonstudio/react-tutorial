import React, { Component } from 'react';

import Page from '../Page'

function ControlInfo(props) {
  if (!props.show) {
    return null
  }
  return (
    <div>
      <p>这里是控制信息，由传入参数props来控制是否显示</p>
    </div>
  )
}

class Conditional extends Component {
  constructor (props) {
    super(props)
    this.state = {
      logined: false,
      msg: '',
      online: true,
      user: {
        username: '',
        password: ''
      },
      showInfo: true
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.toggleShowInfo = this.toggleShowInfo.bind(this)
  }

  handleUsernameChange (event) {
    this.setState({
      user: {...this.state.user, username: event.target.value}
    })
  }

  handlePasswordChange (event) {
    this.setState({
      user: {...this.state.user, password: event.target.value}
    })
  }

  toggleShowInfo () {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  login () {
    console.log(this.state)
    if (!this.state.user.username || !this.state.user.password) {
      this.setState({msg: '请填写完整用户名和密码!'})
    } else if (this.state.user.username === 'ken' && this.state.user.password.toString() === '123456') {
      this.setState({
        msg: '登录成功!',
        logined: true
      })
    } else {
      this.setState({msg: '用户名或密码错误!'})
    }
  }

  logout () {
    this.setState({
      logined: false,
      msg: '',
      user: {
        username: '',
        password: ''
      }
    })
  }

  render() {
    // 1：在render函数中使用条件渲染
    if (!this.state.online) {
      return (
        <p>没有网络</p>
      )
    }
    return (
      <Page title="Conditional Rendering" router={this.props}>
        <div className="Main">
          <section>
            {/* 2：使用行内逻辑操作符实现条件渲染 */}
            {!this.state.logined
              ? (
                <form>
                  <label>username: <input type="text" value={this.state.user.username} onChange={this.handleUsernameChange} /></label>
                  <label>password: <input type="password" value={this.state.user.password} onChange={this.handlePasswordChange} /></label>
                  <button onClick={(event) => {event.preventDefault(); this.login()}}>Login</button>
                </form>
                )
              : (
                <section>
                  <p>你好!{this.state.user.username}</p>
                  <button onClick={(event) => {event.preventDefault(); this.logout()}}>Logout</button>
                </section>
              )}
              <p>{this.state.msg}</p>
            </section>
            <hr />
            {/* 3：根据传入参数进行条件渲染 */}
            <section>
              <button onClick={this.toggleShowInfo}>切换显示控制信息</button>
              <ControlInfo show={this.state.showInfo} />
            </section>
        </div>
      </Page>
    );
  }
}

export default Conditional;
