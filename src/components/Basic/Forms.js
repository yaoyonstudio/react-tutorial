import React, { Component } from 'react';

import Page from '../Page'

const education = [
  {id: 1, title: '博士'},
  {id: 2, title: '硕士'},
  {id: 3, title: '本科'},
  {id: 4, title: '专科'},
  {id: 5, title: '高中'}
]

const hobby = [
  {id: 1, title: '篮球'},
  {id: 2, title: '足球'},
  {id: 3, title: '羽毛球'}
]

class Forms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      telephone: '',
      education: '',
      age: '',
      sex: 1,
      hobby: [],
      signture: '',
      avatar: ''
    }
    this.selectHobby = this.selectHobby.bind(this)
    this.upload = this.upload.bind(this)
  }

  selectHobby (e) {
    let arr = []
    if (this.state.hobby.includes(parseInt(e.target.value, 10))) {
      arr = this.state.hobby.filter(item => parseInt(item, 10) !== parseInt(e.target.value, 10))
    } else {
      arr = this.state.hobby
      arr.push(parseInt(e.target.value, 10))
    }
    this.setState({
      hobby: arr
    })
  }

  readURL(input, callback) {
    if (input && callback && typeof callback === 'function') {
      if (input.files && input.files[0]) {
        let reader = new FileReader()
        reader.onload = function (e) {
          callback(e.target.result)
        }
        reader.readAsDataURL(input.files[0])
      }
    }
    return ''
  }

  upload (e) {
    this.readURL(e.target, (data) => {
      this.setState({
        avatar: data
      })
    })
  }

  submit () {
    console.log('submit')
    console.log(this.state)
    console.log(this.formRef)
  }

  render() {
    return (
      <Page title="Forms" router={this.props}>
        <div className="Main Form">
          <form name="reactForm" ref={formRef => this.formRef = formRef} onSubmit={(e) => { e.preventDefault(); this.submit()}}>
            <label>
              <span>姓名</span>
              <input type="text" placeholder="请输入姓名" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
            </label>
            <label>
              <span>电话</span>
              <input type="telephone" placeholder="请输入电话" value={this.state.telephone} onChange={(e) => this.setState({telephone: e.target.value})} />
            </label>
            <label>
              <span>年龄</span>
              <input type="number" placeholder="请输入年龄" value={this.state.age} onChange={(e) => this.setState({age: e.target.value})} />
            </label>
            <label>
              <span>教育</span>
              <select value={this.state.education} onChange={(e) => this.setState({education: e.target.value})}>
                <option value="">请选择教育程度</option>
                {education && education.length
                  ? education.map((item, index) => <option key={index} value={item.id}>{item.title}</option>)
                  : ''
                }
              </select>
            </label>
            <section>
              <span>性别</span>
              <aside>
                <label>
                  <input type="radio" value="1" checked={parseInt(this.state.sex, 10) === 1} onChange={(e) => this.setState({sex: parseInt(e.target.value, 10)})} name="sex" />
                  男
                </label>
                <label>
                  <input type="radio" value="2" checked={parseInt(this.state.sex, 10) === 2} onChange={(e) => this.setState({sex: parseInt(e.target.value, 10)})} name="sex" />
                  女
                </label>
              </aside>
            </section>
            <section>
              <span>爱好</span>
              <aside>
                {hobby && hobby.length
                  ? hobby.map((item, index) => <label key={index}><input type="checkbox" name="hobby" value={item.id} onChange={(e) => this.selectHobby(e)} />{item.title}</label>)
                  : ''
                }
              </aside>
            </section>
            <label>
              <span>签名</span>
              <textarea value={this.state.signture} onChange={(e) => this.setState({signture: e.target.value})}></textarea>
            </label>
            <label>
              <span>头像</span>
              <input type="file" onChange={e => this.upload(e)} />
            </label>
            <label>
              {this.state.avatar
                ? <img src={this.state.avatar} alt="" />
                : ''
              }
            </label>
            <input type="submit" value="提交" />
          </form>
        </div>
      </Page>
    );
  }
}

export default Forms;
