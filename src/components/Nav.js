import React, { Component } from 'react'
import superagent from 'superagent'
import { connect } from 'react-redux'
import actions from '../actions'

class Nav extends Component {

  constructor() {
    super()
    this.state = {
      zipCode: ''
    }
  }

  searchVenues() {
    const url = 'https://api.foursquare.com/v2/venues/search'

    const params = {
      v: '20140806',
      near: this.state.zipCode,
      client_id: 'VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD',
      client_secret: 'UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ'
    }

    superagent
    .get(url)
    .query(params)
    .set('Accept', 'application/json')
    .end((err, response) => {
      const venues = response.body.response.venues
      this.props.venuesReceived(venues)
    })
  }

  updateZipcode(event) {
    this.setState({
      zipCode: event.target.value
    })
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

const stateToProps = (state) => {
  return {
  }
}

const dispatchToProps = (dispatch) => {
  return {
    venuesReceived: (venues) => dispatch(actions.venuesReceived(venues))
  }
}

export default connect(stateToProps, dispatchToProps)(Nav)