import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import classes from './map.module.css'

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 36.843064686157604, 
      lng: 10.195965969254534
    },
    zoom: 15
  };

  render() {
    return (
      <div className={classes.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:('AIzaSyDnaEzwIo8ekQiUEI7uZFDZDktAHUeGB-I')}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

