import React, { Component } from 'react';

import Page from '../Page'
import OrderItem from './materials/OrderItem'

class Composition extends Component {
  constructor (props) {
    super(props)

    this.state = {
      item1: {id: 1, title: '订单类型一标题', orderNo: 'ol12384294920343204203', name: 'ken', price: '23.54', date: '2017-12-21'},
      item2: {id: 2, title: '订单类型二标题1', orderNo: 'ol12384294920362342784', desc: '这是一条订单', price: '93.54', date: '2017-12-18'}
    }
  }
  render() {
    return (
      <Page title="Composition" router={this.props}>
        <div className="Main Composition">
          <OrderItem data={this.state.item1} special={<p>{this.state.item1.name}</p>}>
            <footer>
              <button>评价</button>
              <button>删除</button>
            </footer>
          </OrderItem>
          <OrderItem data={this.state.item2} special={<p>{this.state.item2.desc}</p>}>
            <footer>
              <button>完成</button>
              <button>提交</button>
            </footer>
          </OrderItem>
        </div>
      </Page>
    );
  }
}

export default Composition;
