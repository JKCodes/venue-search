import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'

class Venues extends Component {
  render() {
    const venues = this.props.venues || []

    return (
      <ol>
        { venues.map((venue, i) => {
            return (
              <li key={venue.id}>
                <div style={{padding:12, marginBottom:12, background: '#f9f9f9'}}>
                  <h4 style={{marginBottom:0}}>{venue.name}</h4>
                  <span>{venue.location.address}</span><br />
                  <a href={venue.url}>{venue.url}</a>
                </div>
              </li>
            )
          })
        }
      </ol>
    )
  }
}

const stateToProps = (state) => {
  return {
    venues: state.venue.venues
  }
}

export default connect(stateToProps)(Venues)