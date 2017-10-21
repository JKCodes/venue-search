import React, { Component } from 'react'

class Nav extends Component {

  searchVenues() {
    console.log('searchVenues: ')
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Zip Code" />
        <button onClick={this.searchVenues.bind(this)}>Search</button>
      </div>
    )
  }
}

export default Nav