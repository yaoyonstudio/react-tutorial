import React, { Component } from 'react';

import Page from '../Page'

const Myelp = React.createElement(
  'p',
  null,
  'This is my element'
)

const Myeldiv = React.createElement(
  'div',
  {
    className: 'myClass',
    id: 'myDiv'
  },
  [
    React.createElement(
      'h3',
      {
        key: 1,
        className: 'title'
      },
      '我的标题'
    ),
    React.createElement(
      'p',
      {
        key: 2,
        className: 'content'
      },
      '我的内容'
    )
  ]
)

function generatorEl (tag, className, content) {
  return React.createElement(tag, className, content)
}

class CreateElement extends Component {
  render() {
    return (
      <Page title="React.createElement" router={this.props}>
        <div className="Main">
          <p>React.Render()会把传入组件编译为React.createElement</p>
          <hr />
          {Myelp}
          <hr />
          {Myeldiv}
          <hr />
          {generatorEl('div', {id: 'myDivEl'}, '哈哈')}
          <hr />
          {generatorEl('div', {id: 'myDivs', style: {color: '#d33', 'fontSize': '20px'}}, generatorEl('p', null, 'Hello React!'))}
        </div>
      </Page>
    );
  }
}

export default CreateElement;
