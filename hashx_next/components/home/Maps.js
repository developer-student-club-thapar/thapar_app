import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Hidden } from '@material-ui/core';

class Maps extends Component {
  state = {
    stores: [
      {
        lat: 30.354086,
        lng: 76.362207,
        name: 'Mudra Nite',
        time: '5pm onwards',
      },
      {
        lat: 30.35183,
        lng: 76.370889,
        name: 'Full Stack Bootcamp',
        time: '5pm-8pm',
      },
    ],
    showingInfoWindow: false, // Hides or the shows the infoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.lat,
            lng: store.lng,
          }}
          name={store.name}
          time={store.time}
          onClick={this.onMarkerClick}
        />
      );
    });
  };

  displayInfo = () => {
    return (
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
      >
        <div style={{ color: 'black' }}>
          <h4>{this.state.selectedPlace.name}</h4>
          <h5>{this.state.selectedPlace.time}</h5>
        </div>
      </InfoWindow>
    );
  };

  render() {
    const mapStyles = {
      width: '1232px',
      height: '400px',
    };
    const mapStylesMobile = {
      width: '328px',
      height: '400px',
    };
    const mapStylesTab = {
      width: '552px',
      height: '400px',
    };
    return (
      <>
        <Hidden mdDown>
          <Map
            google={this.props.google}
            zoom={16}
            style={mapStyles}
            initialCenter={{ lat: 30.356674, lng: 76.364787 }}
          >
            {this.displayMarkers()}
            {this.displayInfo()}
          </Map>
        </Hidden>
        <Hidden only={['sm', 'md', 'lg', 'xl']}>
          <Map
            google={this.props.google}
            zoom={16}
            style={mapStylesMobile}
            initialCenter={{ lat: 30.356674, lng: 76.364787 }}
          >
            {this.displayMarkers()}
            {this.displayInfo()}
          </Map>
        </Hidden>
        <Hidden only={['md', 'xs', 'lg', 'xl']}>
          <Map
            google={this.props.google}
            zoom={16}
            style={mapStylesTab}
            initialCenter={{ lat: 30.356674, lng: 76.364787 }}
          >
            {this.displayMarkers()}
            {this.displayInfo()}
          </Map>
        </Hidden>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB3JAqF0AMxgbfnGtt0R5Yk0MaBe9p1P5s',
})(Maps);
