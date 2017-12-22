import React, { Component } from 'react';

import Page from '../../Page'
import Swiper from './Swiper'
import Scroller from './Scroller'

class SwiperPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: [
        {id: 1, title: '标题一', 'img_url': 'http://tower.tigonetwork.com/test/s1.jpg', link_url: 'http://www.baidu.com'},
        {id: 1, title: '标题二', 'img_url': 'http://tower.tigonetwork.com/test/s2.jpg', link_url: 'http://www.baidu.com'}
      ],
      data: [
        {id: 1, title: '标题一'}, 
        {id: 2, title: '标题二'}, 
        {id: 3, title: '标题三'}, 
        {id: 4, title: '标题四'}, 
        {id: 5, title: '标题五'}, 
        {id: 6, title: '标题六'}, 
        {id: 7, title: '标题七'}, 
        {id: 8, title: '标题八'}
      ]
    }
  }
  render() {
    return (
      <Page title="Swiper" router={this.props}>
        <div className="Main">
          <Swiper data={this.state.slides} />
          <hr />
          <Scroller data={this.state.data} />
        </div>
          
      </Page>
    );
  }
}

export default SwiperPage;
