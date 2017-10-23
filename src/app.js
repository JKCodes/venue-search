import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Nav, Venues } from './components'
import store from './stores'
import { Provider } from 'react-redux'

const app = (
  <Provider store={store.initialize()}>
        <div>
          <Nav />
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                Map will go here
              </div>

              <div className="col-sm-6">
                <Venues />
              </div>
            </div>
          </div>
        </div>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))