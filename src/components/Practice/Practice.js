import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from '../Page'

class Practice extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menus: [
        {
          title: 'Infinite Scroll',
          name: 'posts'
        },
        {
          title: 'Infinite Scroll 2',
          name: 'postlist'
        },
        {
          title: 'Swiper',
          name: 'swiperPage'
        },
        {
          title: 'FilterPage',
          name: 'filterPage'
        },
        {
          title: 'TabMenuPage',
          name: 'tabMenuPage'
        },
        {
          title: 'SideMenuPage',
          name: 'sideMenuPage'
        },
        {
          title: 'ImgSliderPage',
          name: 'imgSliderPage'
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
                {this.state.menus.map((item, index) => <li key={index}><Link to={'/practice/' + item.name}>{item.title}</Link></li>)}
              </ul>
            )
            : ''
          }
        </div>
      </Page>
    );
  }
}

export default Practice;
