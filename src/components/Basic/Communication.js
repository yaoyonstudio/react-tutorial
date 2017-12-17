import React, { Component } from 'react';

import Page from '../Page'
import Child4 from './materials/Child4'
import Child5 from './materials/Child5'
import Child6 from './materials/Child6'

class Communication extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0,
      pValue: 'abc',
      cValue5: 5,
      cValue6: 6
    }
    this.changePvalue = this.changePvalue.bind(this)
    this.changeValue = this.changeValue.bind(this)
    this.passParamsToParent = this.passParamsToParent.bind(this)

    this.changeChild6 = this.changeChild6.bind(this)
    this.passParamsToChild6 = this.passParamsToChild6.bind(this)
    this.changeChild5 = this.changeChild5.bind(this)
    this.passParamsToChild5 = this.passParamsToChild5.bind(this)
  }

  changePvalue () {
    this.setState({
      pValue: this.state.pValue + '!'
    })
  }

  changeValue () {
    this.setState({
      value: this.state.value + 1
    })
  }

  passParamsToParent (cValue) {
    console.log('这是从子组件传来的参数：', cValue)
    if (!cValue) return
    this.setState({
      valueFromChild: cValue
    })
  }

  // ///////////////////////////////////

  changeChild6 () {
    this.setState({
      cValue6: this.state.cValue6 + '-'
    })
  }

  changeChild5 () {
    this.setState({
      cValue5: this.state.cValue5 + '+'
    })
  }

  passParamsToChild6 (value) {
    this.setState({
      cValue6: value
    })
  }

  passParamsToChild5 (value) {
    this.setState({
      cValue5: value
    })
  }

  render() {
    return (
      <Page title="Components Communication" router={this.props}>
        <div className="Main">
          <section>
            <p>父组件自有状态<span>{this.state.pValue}</span></p>
            <button onClick={() => this.changePvalue()}>父组件改变自己状态</button>
            <button onClick={() => this.changeValue()}>父组件改变状态传递给子组件</button>
            <Child4 value={this.state.value} changePvalue={() => this.changePvalue()} passParamsToParent={(cValue) => this.passParamsToParent(cValue)}/>
            <p>从子组件传来的参数：{this.state.valueFromChild}</p>
          </section>
          <hr />
          <Child5 value={this.state.cValue5} changeChild6={() => this.changeChild6()} passParamsToChild6={(v5) => {this.passParamsToChild6(v5)}} />
          <Child6 value={this.state.cValue6} changeChild5={() => this.changeChild5()} passParamsToChild5={(v6) => {this.passParamsToChild5(v6)}} />
        </div>
      </Page>
    );
  }
}

export default Communication;
