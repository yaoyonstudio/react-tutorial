import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

export default class ImgSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      imgs: [],
      options: {
        continuous: true,
        callback: (index, elem) => this.slideCallback(index, elem)
      }
    }
  }
  slideCallback (index, elem) {
    // console.log('index:', index)
    // console.log('elem:', elem)
    // console.log(this.state.current)

    if (parseInt(this.state.current, 10) !== parseInt(elem.getAttribute('data-cate'), 10)) {
      this.setState({
        current: parseInt(elem.getAttribute('data-cate'), 10)
      })
    }
  }
  componentWillMount () {
    let _imgs = []
    /* eslint-disable array-callback-return */
    if (this.props.data) {
      this.props.data.map((item,index) => {
        if (item.imgs && item.imgs.length) {
          item.imgs.map((sItem, i) => {
            sItem.cate = item.id
            _imgs.push(sItem)
          })
          // _imgs = _imgs.concat(item.imgs)
        }
      })
      console.log(_imgs)
      this.setState({
        current: _imgs[0].cate,
        imgs: _imgs
      })
    }
  }
  render() {
    return (
      <div className="ImgSlider">
        <section>
          <ReactSwipe className="carousel" swipeOptions={this.state.options}>
            {
              this.state.imgs.map((item, index) => {
                return (
                  <div key={index} data-cate={item.cate}>
                    {/* <a href={item.link_url}> */}
                      <img style={{width: '100%'}} src={item.src} alt={item.title} />
                    {/* </a> */}
                  </div>
                )
              })
            }
          </ReactSwipe>
        </section>
        <footer>
          <ul>
            {this.props.data && this.props.data.length
              ? this.props.data.map((item, index) => <li key={index} className={this.state.current === item.id ? 'active' : ''}>{item.title}</li>)
              : ''
            }
          </ul>
        </footer>
      </div>
    );
  }
}
