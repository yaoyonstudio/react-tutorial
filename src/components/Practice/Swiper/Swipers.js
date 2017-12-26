import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
const VirtualizeSwipeableViews = virtualize(SwipeableViews);

export default class Swipers extends Component {
  render() {
    let opts = {
      startSlide: 2
    }
    if (!this.props.data || !this.props.data.length) {
      return (
        <div className="Swipers">
          <img src={process.env.PUBLIC_URL + '/img/placeholder.png'} style={{width: '100%'}} alt="" />
        </div>
      )
    } else {
      return (
        <div className="Swipers">
          <ReactSwipe  className="carousel" swipeOptions={opts}>
            {
              this.props.data.map((item, index) => {
                return (
                  <div key={index} className="Swiper_item">
                    <a href={item.link_url}>
                      <img style={{width: '100%'}} src={item.img_url} alt={item.title} />
                    </a>
                  </div>
                )
              })
            }
          </ReactSwipe>
        </div>
      );
    }
  }
}
