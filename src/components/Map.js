import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

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

    const markers = this.props.markers || []

    return (
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        defaultZoom={this.props.zoom}
        defaultCenter={{lat:40.728199, lng:-73.9894738}}>
        {markers.map((marker, index) => (
            <Marker {...marker} />
          )
        )}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map)