import React, { Component } from 'react';

import Page from '../Page'

class Event extends Component {
  constructor (props) {
    super(props)
    this.state = {
      num: 0
    }
    this.add = this.add.bind(this)
    this.minus = this.minus.bind(this)
    this.handle = this.handle.bind(this)
    this.handle2 = this.handle2.bind(this)
  }

  add () {
    this.setState({
      num: this.state.num + 1
    })
  }

  minus () {
    this.setState({
      num: this.state.num - 1
    })
  }

  handle () {
    alert('Hello')
  }

  handle2 (value) {
    console.log(value)
  }

  render() {
    return (
      <Page title="Event Handle" router={this.props}>
        <div className="Main">
          <section>
            <p>{this.state.num}</p>
            <button onClick={() => this.add()}>点我加1</button>
            <button onClick={() => this.minus()}>点我减1</button>
          </section>
          <hr />
          <section>
            <button onClick={(event) => { event.preventDefault(); this.handle(); }}>阻止事件传播</button>
          </section>
          <hr />
          <section>
            <input type="text" id="name" />
            <button onClick={() => this.handle2(document.querySelector('#name').value)}>传递参数</button>
          </section>
        </div>
      </Page>
    );
  }
}

export default Event;
