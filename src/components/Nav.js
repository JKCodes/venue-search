import React, { Component } from 'react'
import superagent from 'superagent'
import { connect } from 'react-redux'
import actions from '../actions'

class Nav extends Component {

  constructor() {
    super()
    this.state = {
      zipCode: '',
      filter: 'food'
    }
  }

  searchVenues(event) {
    event.preventDefault()

    const url = 'https://api.foursquare.com/v2/venues/search'

    const params = {
      v: '20140806',
      near: this.state.zipCode,
      client_id: 'VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD',
      client_secret: 'UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ',
      query: this.state.filter
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

  changeFilter(event) {
    console.log(event.target.value)
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input className="form-control" onChange={this.updateZipcode.bind(this)} type="text" placeholder="Zip Code" />
                <select id="filter" onChange={this.changeFilter.bind(this)} style={{marginLeft: 12}} className="form-control">
                  <option value="food">Food</option>
                  <option value="coffee">Coffee</option>
                  <option value="clothing">Clothing</option>
                  <option value="music">Music</option>
                  <option value="fitness">Fitness</option>
                 </select> 
              </div>
              <button style={{marginLeft: 12}} className="btn btn-default" onClick={this.searchVenues.bind(this)}>Search</button>
            </form>
          </div>
        </div>
      </nav>
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