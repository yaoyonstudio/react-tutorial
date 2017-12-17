import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { matchPath } from 'react-router'

class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menus: [
        {
          title: '基本',
          name: 'basic'
        },
        {
          title: '实用',
          name: 'practice'
        },
        {
          title: '高级',
          name: 'home'
        }
      ]
    }
    this.active = this.active.bind(this)
  }

  active (name) {
    if (this.props.router.location.pathname === '/' + name) {
      return true
    } else {
      const match = matchPath(this.props.router.location.pathname, {
        path: '/' + name + '/:name'
      })
      if (match && match.isExact) {
        return true
      }
      return false
    }
  }

  render() {
    return (
      <div className="Menu">
        {this.state.menus.length
          ? (
            <ul>
              {this.state.menus.map((item, index) => <li className={this.active(item.name) ? 'active' : ''} key={index}><Link to={'/' + item.name}>{item.title}</Link></li>)}
            </ul>
          )
          : ''
        }
      </div>
    );
  }
}

export default Menu;
