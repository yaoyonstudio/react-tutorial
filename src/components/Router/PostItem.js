import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PostItem extends Component {
  render() {
    return (
      <li className="PostItem">
        <Link to={"/posts/" + this.props.data.id}>
          <h4>{this.props.data.title}</h4>
          {this.props.data.thumbnail.length
            ? (
              <ul className="thumbnail_imgs">
                {
                  this.props.data.thumbnail.map((item, index) => <li key={index}><img src={item} alt="" /></li>)
                }
              </ul>
            )
            : ''
          }
        </Link>
      </li>
    );
  }
}

export default PostItem;
