import React, { Component } from 'react';

export default class TabMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        left: '-70vw'
      }
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        style: {
          left: '0'
        }
      })
    }, 100)
  }
  render() {
    return (
      <div className="SideMenu" onClick={() => this.props.toggle()}>
        <div className="SideMenu_main" onClick={(e) => e.stopPropagation()} style={this.state.style}>
          <p>Side Page</p>
        </div>
      </div>
    );
  }
}
