import React, { Component } from 'react';

class OrderItem extends Component {
  render() {
    return (
      <div className="OrderItem">
        <header>
          订单号：<span>{this.props.data.orderNo}</span>
        </header>
        <section>
          <h4>{this.props.data.title}</h4>
          <div>
            {this.props.special}
          </div>
          <p>价格：{this.props.data.price}</p>
          <p>日期：{this.props.data.date}</p>
        </section>
        {this.props.children}
      </div>
    );
  }
}

export default OrderItem;
