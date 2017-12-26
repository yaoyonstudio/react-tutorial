import React, { Component } from 'react';

export default class TabMenu extends Component {
  render() {
    return (
      <div className="TabMenu">
        <ul>
          {this.props.data && this.props.data.length
            ? this.props.data.map((item, index) => (
              <li key={index} className={this.props.current === item.name ? 'active' : ''} onClick={() => this.props.callback(item)}>
                {this.props.current === item.name ? <img src={item.activeIcon} alt={item.title} /> : <img src={item.icon} alt={item.title} />}
                <p>{item.title}</p>
              </li>
            ))
            : ''
          }
        </ul>
      </div>
    );
  }
}
