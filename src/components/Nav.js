import React, { Component } from 'react'

class Nav extends Component {

  constructor() {
    super()
    this.state = {
      zipCode: ''
    }
  }

  searchVenues() {
    console.log('searchVenues: ')
  }

  updateZipcode(event) {
    console.log('updateZipcode: ' + event.target.value)
  }

  render() {
    return (
      <div>
        <input onChange={this.updateZipcode.bind(this)} type="text" placeholder="Zip Code" />
        <button onClick={this.searchVenues.bind(this)}>Search</button>
      </div>
    )
  }
}

export default Nav