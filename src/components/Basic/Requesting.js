import React, { Component } from 'react';
import axios from 'axios'

import Page from '../Page'

const API_URL = 'https://api.github.com/users/yaoyonstudio/repos?per_page=10'

class Requesting extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
    this.fetch1 = this.fetch1.bind(this)
    this.fetch2 = this.fetch2.bind(this)
  }

  fetch1 () {
    fetch(API_URL)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({posts: res})
      })
  }

  fetch2 () {
    axios(API_URL)
      .then((res) => {
        console.log(res)
        if (res.status === 200 && res.data) {
          this.setState({posts: res.data})
        }
      })
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <Page title="Data Requesting" router={this.props}>
        <div className="Main">
          <section>
            <button onClick={() => this.fetch1()}>使用Fetch请求</button>
            <button onClick={() => this.fetch2()}>使用Axios请求</button>
          </section>
          <section>
            {this.state.posts.length
              ? (
                <ul>
                  {this.state.posts.map((item, index) => <li key={index}><a href={item.html_url}>{item.name}</a></li>)}
                </ul>
              )
              : ''
            }
          </section>
        </div>
      </Page>
    );
  }
}

export default Requesting;