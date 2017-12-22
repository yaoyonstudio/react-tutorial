import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

class PostItem extends PureComponent {
  render() {
    let data = this.props.data
    if (!data) return ''
    return (
      <li className="PostItem">
        <Link to={"/practice/posts/" + data.id}>
          <h4>{data.title}</h4>
          {data.thumbnail && data.thumbnail.length
            ? (
              <ul className="thumbnail_imgs">
                {
                  data.thumbnail.map((item, index) => <li key={index}><img src={item} alt="" /></li>)
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
