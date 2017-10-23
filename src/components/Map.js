import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { connect } from 'react-redux'

class Map extends Component {
  
  constructor() {
    super()
    this.state = {
      map: null
    }
  }

  mapLoaded(map) {
    if (this.state.map != null)
      return

    this.setState({
      map: map
    })
  }

  render() {

    const venues = this.props.venues || []
    const markers = venues.map((venue,i) => {
      return { key: i, position: {lat: venue["location"]["lat"], lng: venue["location"]["lng"]}, label: `${i}`}
    })
    const center = markers.length > 0 ? markers[0].position : {lat:0 , lng: 0}

    console.log(center)

    return (
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        defaultZoom={this.props.zoom}
        defaultCenter={center}
        center={center}>
        {markers.map((marker, index) => (
            <Marker {...marker} />
          )
        )}
      </GoogleMap>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    venues: state.venue.venues
  }
}

export default connect(mapStateToProps)(withGoogleMap(Map))