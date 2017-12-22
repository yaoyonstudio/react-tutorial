import React, { Component } from 'react';

class Scroller extends Component {
  render() {
    return (
      <div className="Scroller">
        <ul>
          {this.props.data.length
            ? this.props.data.map((item, index) => <li className="Scroller_item" key={index}>{item.title}</li>)
            : ''
          }
        </ul>
      </div>
    );
  }
}

export default Scroller;
