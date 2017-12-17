import React, { Component } from 'react';
import back from '../../img/back.svg'

class Rheader extends Component {
  constructor (props) {
    super(props)
    this.goBack = this.goBack.bind(this)
  }

  goBack () {
    if (!this.props.router) return 
    this.props.router.history.goBack()
  }

  render() {
    return (
      <div className="Rheader">
        <h2>{this.props.title}</h2>
        {this.props.router &&
          <img src={back} alt="back" onClick={() => {this.goBack()}} />
        }
      </div>
    );
  }
}

export default Rheader;
