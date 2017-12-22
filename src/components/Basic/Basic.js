import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Page from '../Page'

class Basic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menus: [
        {
          title: 'State',
          name: 'state'
        },
        {
          title: 'Props',
          name: 'props'
        },
        {
          title: 'Event Handle',
          name: 'event'
        },
        {
          title: 'Conditional Rendering',
          name: 'conditional'
        },
        {
          title: 'Lists Rendering',
          name: 'lists'
        },
        {
          title: 'Lifecycle',
          name: 'lifecycle'
        },
        {
          title: 'Component Communication',
          name: 'communication'
        },
        {
          title: 'Data Request',
          name: 'requesting'
        },
        {
          title: 'Forms',
          name: 'forms'
        },
        {
          title: 'React.createElement',
          name: 'createElement'
        },
        {
          title: 'Refs',
          name: 'refs'
        },
        {
          title: 'Composition',
          name: 'composition'
        }
      ]
    }
  }
  
  render() {
    return (
      <Page title="React Basic">
        <div className="Main Basic">
          {this.state.menus.length
            ? (
              <ul className="SubMenu">
                {this.state.menus.map((item, index) => <li key={index}><Link to={'/basic/' + item.name}>{item.title}</Link></li>)}
              </ul>
            )
            : ''
          }
        </div>
      </Page>
    );
  }
}

export default Basic;
