import React, { Component } from 'react';

import Page from '../../Page'
import Swiper from './Swiper'
import Swipers from './Swipers'
import Scroller from './Scroller'

class SwiperPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: [
        {id: 1, title: '标题一', 'img_url': 'http://tower.tigonetwork.com/test/s1.jpg', link_url: 'http://www.baidu.com'},
        {id: 2, title: '标题二', 'img_url': 'http://tower.tigonetwork.com/test/s2.jpg', link_url: 'http://www.baidu.com'},
        {id: 3, title: '标题三', 'img_url': 'http://tower.tigonetwork.com/test/s3.jpg', link_url: 'http://www.baidu.com'},
        {id: 4, title: '标题四', 'img_url': 'http://tower.tigonetwork.com/test/s4.jpg', link_url: 'http://www.baidu.com'},
        {id: 5, title: '标题五', 'img_url': 'http://tower.tigonetwork.com/test/s5.jpg', link_url: 'http://www.baidu.com'},
        {id: 6, title: '标题六', 'img_url': 'http://tower.tigonetwork.com/test/s6.jpg', link_url: 'http://www.baidu.com'}
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
          <hr />
          <Swipers data={this.state.slides} />
        </div>
          
      </Page>
    );
  }
}

export default SwiperPage;
