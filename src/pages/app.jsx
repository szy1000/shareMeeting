import React from "react"


export default class App extends React.Component {

  ajax() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', '/api/getUser', true);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
        let response = JSON.parse(xhr.responseText);
      }
    }
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
