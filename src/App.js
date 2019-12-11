import React, { Component } from "react"
import "./index.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Click for a joke from dear old dad."}</button>
        <br/>
        <span>{msg}</span>
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hey Daaaad... How'd you get in here???
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
