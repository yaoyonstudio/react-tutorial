import React, { Component } from 'react';

import Page from '../../Page'
import ImgSlider from './ImgSlider'

class ImgSliderPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 1,
          title: '效果图',
          imgs: [
            {id: 1, title: '效果图一', desc: '这是一个效果图1', src: 'https://mock.topicking.com/static/img/640X356/1.jpg'},
            {id: 2, title: '效果图二', desc: '这是一个效果图2', src: 'https://mock.topicking.com/static/img/640X356/2.jpg'},
            {id: 3, title: '效果图三', desc: '这是一个效果图3', src: 'https://mock.topicking.com/static/img/640X356/3.jpg'},
            {id: 4, title: '效果图四', desc: '这是一个效果图4', src: 'https://mock.topicking.com/static/img/640X356/4.jpg'},
            {id: 5, title: '效果图五', desc: '这是一个效果图5', src: 'https://mock.topicking.com/static/img/640X356/5.jpg'},
          ]
        },
        {
          id: 2,
          title: '实景图',
          imgs: [
            {id: 6, title: '实景图一', desc: '这是一个实景图6', src: 'https://mock.topicking.com/static/img/640X356/6.jpg'},
            {id: 7, title: '实景图二', desc: '这是一个实景图7', src: 'https://mock.topicking.com/static/img/640X356/7.jpg'},
            {id: 8, title: '实景图三', desc: '这是一个实景图8', src: 'https://mock.topicking.com/static/img/640X356/8.jpg'},
            {id: 9, title: '实景图四', desc: '这是一个实景图9', src: 'https://mock.topicking.com/static/img/640X356/9.jpg'},
            {id: 10, title: '实景图五', desc: '这是一个实景图10', src: 'https://mock.topicking.com/static/img/640X356/10.jpg'},
          ]
        },
        {
          id: 3,
          title: '配套图',
          imgs: [
            {id: 11, title: '配套图一', desc: '这是一个配套图11', src: 'https://mock.topicking.com/static/img/640X356/11.jpg'},
            {id: 12, title: '配套图二', desc: '这是一个配套图12', src: 'https://mock.topicking.com/static/img/640X356/12.jpg'},
            {id: 13, title: '配套图三', desc: '这是一个配套图13', src: 'https://mock.topicking.com/static/img/640X356/13.jpg'},
            {id: 14, title: '配套图四', desc: '这是一个配套图14', src: 'https://mock.topicking.com/static/img/640X356/14.jpg'},
            {id: 15, title: '配套图五', desc: '这是一个配套图15', src: 'https://mock.topicking.com/static/img/640X356/15.jpg'},
          ]
        }
      ]
    }
  }
  
  render() {
    return (
      <Page title="ImgSlider" router={this.props}>
        <div className="Main">
          <ImgSlider data={this.state.data} />
        </div>
      </Page>
    );
  }
}

export default ImgSliderPage;
