import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
export class MapContainer extends Component {
   render() {
      return (
         <Map google={this.props.google} zoom={14}>
             <Marker 
                  onClick={this.onMarkerClick}
                  name={'Current location'} 
             />
             
          </Map>
      );
   }
}
 const GoogleMap = GoogleApiWrapper({
       apiKey: ('AIzaSyDnaEzwIo8ekQiUEI7uZFDZDktAHUeGB-I')
})(MapContainer);
export default GoogleMap;