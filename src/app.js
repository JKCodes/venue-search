import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Nav } from './components'

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        React App
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))