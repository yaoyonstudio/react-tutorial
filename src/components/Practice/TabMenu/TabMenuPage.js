import React, { Component } from 'react';

import Page from '../../Page'
import TabMenu from './TabMenu'

class TabMenuPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: '',
      menus: [
        {id: 1, name: 'home', title: '首页', icon: require('../../../img/icons/heart.svg'), activeIcon: require('../../..//img/icons/heart_active.svg')},
        {id: 2, name: 'cate', title: '分类', icon: require('../../../img/icons/star.svg'), activeIcon: require('../../..//img/icons/star_active.svg')},
        {id: 3, name: 'article', title: '文章', icon: require('../../../img/icons/flower.svg'), activeIcon: require('../../..//img/icons/flower_active.svg')},
        {id: 4, name: 'user', title: '我的', icon: require('../../../img/icons/user.svg'), activeIcon: require('../../..//img/icons/user_active.svg')}
      ]
    }
    this.select = this.select.bind(this)
  }

  select (item) {
    console.log(item)
    this.setState({
      current: item.name
    })
  }
  
  render() {
    return (
      <Page title="Swiper" router={this.props}>
        <div className="Main" style={{padding: 0}}>
          <p>当前页面：</p>
          <TabMenu data={this.state.menus} callback={(item) => this.select(item)} current={this.state.current ? this.state.current : this.state.menus[0].name} />
        </div>
      </Page>
    );
  }
}

export default TabMenuPage;
