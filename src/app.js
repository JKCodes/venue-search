import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Nav, Venues, Map } from './components'
import store from './stores'
import { Provider } from 'react-redux'

const app = (
  <Provider store={store.initialize()}>
          <div className="container">
            <div className="row" style={{position: 'fixed', left:0, top:0, width: '100%', zIndex: '2'}}>
              <Nav />
            </div>
            <div className="row">
              <div className="col-sm-6" style={{position: 'fixed', left:0, top: 80}}>
                <Map
                  zoom={12}
                  containerElement={<div style={{height: '89vh'}} /> }
                  mapElement={<div style={{height:'89vh'}} /> }
                />
              </div>

              <div className="col-sm-6 col-sm-offset-6" style={{marginTop: 80}}>
                <Venues />
              </div>
            </div>
          </div>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))