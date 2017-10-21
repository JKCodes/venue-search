import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Nav, Venues } from './components'
import store from './stores'
import { Provider } from 'react-redux'

class App extends Component {

  render() {
    return (
      <Provider store={store.initialize()}>
        <div>
          <Nav />
          <Venues />
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))