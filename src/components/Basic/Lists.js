import React, { Component } from 'react';

import Page from '../Page'

const team = [
  {id: 1, name: 'ken', age: 16},
  {id: 2, name: 'yaoyon', age: 17},
  {id: 3, name: 'kenny', age: 18},
  {id: 4, name: 'yaoyonstudio', age: 19}
]

function MemberItem(props) {
  return (
    <li>{props.data.id} : {props.data.name} - {props.data.age}</li>
  )
}

class Lists extends Component {
  render() {
    // 1：拼接渲染
    const listMembers = team.map((item, index) => <li key={index}>{item.id} : {item.name} - {item.age}</li>)

    return (
      <Page title="Lists Rendering" router={this.props}>
        <div className="Main">
          <section>
            <ul>{listMembers}</ul>
          </section>
          <hr />
          <section>
            {/* 2：行内渲染） */}
            <ul>
              {team.map((item, index) => <li key={index}>{item.id} : {item.name} - {item.age}</li>)}
            </ul>
          </section>
          <hr />
          <section>
            {/* 3: 分离组件渲染 */}
            <ul>
              {team.map((item, index) => <MemberItem key={index} data={item} />)}
            </ul>
          </section>
        </div>
      </Page>
    );
  }
}

export default Lists;
