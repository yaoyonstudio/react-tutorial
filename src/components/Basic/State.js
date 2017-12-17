import React, { Component } from 'react';

import Page from '../Page'
import Avatar from '../../img/cat.jpg'

class State extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'ken',
      avatar: Avatar,
      num: 0
    }

    setTimeout(() => {
      this.setState({
        greet: 'Hello',
        loading: false
      })
    }, 3000);

    this.set = this.set.bind(this)
    this.add = this.add.bind(this)
  }

  set () {
    this.setState({
      test: 'haha'
    }, () => {
      console.log('setState回调')
    })
  }

  add () {
    this.setState((prevState) => {
      console.log('prevState:', prevState)
      return {
        num: prevState.num + 1
      }
    })
  }

  render() {
    return (
      <Page title="State & setState" router={this.props}>
        <div className="Main">
          <section>
            <h3>{this.state.name}</h3>
            <img src={this.state.avatar} alt="" />
            {this.state.loading ? <p>Wait...</p> : <p>{this.state.greet}</p>}
          </section>
          <hr />
          <section>
            <h4>setState可以带一个回调函数</h4>
            <p>当setState执行完成后会触发回调函数，一般情况使用componentDidUpdate()来代替</p>
            <button onClick={() => this.set()}>setState回调</button>
          </section>
          <hr />
          <section>
            <p>{this.state.num}</p>
            <button onClick={() => this.add()}>加1</button>
          </section>
        </div>
      </Page>
    );
  }
}

export default State;
