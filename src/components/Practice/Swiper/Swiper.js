import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

export default class Swiper extends Component {
  render() {
    if (!this.props.data || !this.props.data.length) {
      return (
        <div className="Swiper">
          <img src={process.env.PUBLIC_URL + '/img/placeholder.png'} style={{width: '100%'}} alt="" />
        </div>
      )
    } else {
      return (
        <div className="Swiper">
          <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
            {
              this.props.data.map((item, index) => {
                return (
                  <div key={index}>
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
