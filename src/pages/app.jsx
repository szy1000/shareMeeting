import React from "react"
import './global.less'

export default class App extends React.Component {

  state = {
    name: '-',
    age: 0,
    avatar: ""
  }

  ajax = () => {
    const _this = this
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:3000/api/getUserInfo', true);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
        const {name, age,avatar} = JSON.parse(xhr.responseText);
        _this.setState({
          name,
          avatar,
          age
        })
      }
    }
  }

  jsonp = () => {
    const _this = this
    const script = document.createElement('script');
    script.src = `http://localhost:3000/api/getUserInfo/?callback=show`
    document.head.appendChild(script)
    window.show = function (params) {
      const {name,
        avatar,
        age} = params
      _this.setState({
        name,
        avatar,
        age
      })
    }
  }

  // todo 4
  componentDidMount() {
    const _this = this
    window.onmessage = function(e) {
      const {name, avatar, age} = e.data
      _this.setState({
        name,
        avatar,
        age
      })
    }
  }


  // todo 5
  websocket = () => {
    const _this = this
    let socket = new WebSocket('ws://localhost:3000');
    socket.onopen = function () {
      socket.send('我爱你');//向服务器发送数据
    }
    socket.onmessage = function (e) {
      const {name, avatar, age} = JSON.parse(e.data)
      _this.setState({
        name,
        avatar,
        age
      })
    }
  }

  render() {
    const {name, avatar, age} = this.state
    return (
      <div>
        <button onClick={this.ajax}>获取用户信息ajax</button>
        <hr/>
        <button onClick={this.jsonp}>获取用户信息jsonp</button>
        <hr/>
        <button onClick={this.websocket}>获取用户信息 websocket</button>




        <div className="info">
          <img src={avatar} alt="" />
          <div>
            <p>用户名：{name}</p>
            <p>年龄：{age}</p>
          </div>
        </div>
      </div>
    )
  }
}
