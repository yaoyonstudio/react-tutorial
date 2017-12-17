import React, { Component } from 'react';
import axios from 'axios'
import Page from '../Page'
import PostItem from './PostItem'

const API_URL = 'http://localhost:3001/posts'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get(API_URL)
      .then((res) => {
        if (res.status === 200) {
          console.log(res)
          this.setState({
            posts: res.data
          })
        }
      })
  }
  
  render() {
    return (
      <Page title="文章列表" router={this.props}>
        <div className="Main">
          {this.state.posts.length
            ? (
              <ul>
                {
                  this.state.posts.map((item, index) => <PostItem key={index} data={item} />)
                }
              </ul>
            )
            : <p>没有文章</p>
          }
        </div>
      </Page>
    );
  }
}

export default Posts;
