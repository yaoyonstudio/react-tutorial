import React, { Component } from 'react';
import notFound from '../img/404.png'

class Notfound extends Component {
  render() {
    return (
      <div className="Page Notfound">
        <h3>亲!你迷路了!</h3>
        <img src={notFound} alt="Page Not Found" />
      </div>
    );
  }
}

export default Notfound;
