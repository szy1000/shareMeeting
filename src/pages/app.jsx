import React from "react"


export default class App extends React.Component {

  ajax() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', '/api/getUserInfo', true);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
        let response = JSON.parse(xhr.responseText);
      }
    }
  }

  show = (e) => {
    console.log(e)
  }

  componentDidMount() {
    this.ajax()
  }

  render() {
    return (
      <div>
        jsonp
      </div>
    )
  }
}
