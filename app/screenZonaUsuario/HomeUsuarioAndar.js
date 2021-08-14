import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Alert, TouchableOpacity, Dimensions, ScrollView, StatusBar } from 'react-native';
import ThemedDialog from 'react-native-elements/dist/dialog/Dialog';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 4.60971;
const LONGITUDE = -74.08175;
const LATITUDE_DELTA = 0.09;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class ZonaUsuario extends Component {

  constructor(props) {
    console.log('METODO CONSTRUCTOR');
    super(props);    
    this.state = {
      prevPos: null,
      curPos: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
      },
      curAng: 45,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
    this.changePosition = this.changePosition.bind(this);
    this.getRotation = this.getRotation.bind(this);
    this.updateMap = this.updateMap.bind(this);
  }

  geolocalizacionAndar() {

    if ("geolocation" in navigator){ 
      console.log('SI SE GEOLOCALIZA');
      navigator.geolocation.getCurrentPosition((position) => {
          const latGeoloc = position.coords.latitude;
          const longGeoloc = position.coords.longitude;
          const accuracy = position.coords.accuracy;
          this.calcDelta(latGeoloc, longGeoloc, accuracy);
        })
    }else{
      console.log('NO SE PUEDE GEOLOCALIZAR');
    }   

  }

  calcDelta(latGeoloc, longGeoloc, accuracy) {
    const oneDegreeOfLongitudeInMeters = 111.32;
    const ciscunference = (40075 / 360);
    const latDelta = accuracy * (1 / Math.cos(lat) * ciscunference);
    const longDelta = (accuracy / oneDegreeOfLongitudeInMeters);
    this.setState({
      curPos: {
        latitude: latGeoloc,
        longitude: longGeoloc,
      },
      latitudeDelta: latDelta,
      longitudeDelta: longDelta,
    })
  }

  changePosition(latOffset, lonOffset) {
    console.log('METODO CHANGE');
    this.geolocalizacionAndar();
    const latitude = this.state.curPos.latitude + latOffset;
    const longitude = this.state.curPos.longitude + lonOffset;
    this.setState({
      prevPos: this.state.curPos,
      curPos: { latitude, longitude },
    });
    this.updateMap();
  }

  getRotation(prevPos, curPos) {
    if (!prevPos) {
      return 0;
    }
    const xDiff = curPos.latitude - prevPos.latitude;
    const yDiff = curPos.longitude - prevPos.longitude;
    return (Math.atan2(yDiff, xDiff) * 180.0) / Math.PI;
  }

  updateMap() {
    const { curPos, prevPos, curAng } = this.state;
    const curRot = this.getRotation(prevPos, curPos);
    this.map.animateCamera({ heading: curRot, center: curPos, pitch: curAng });
  }

  render() {
    return (
      <View style={styles.flex}>
        {this.state.curPos.latitude ? 
        <MapView
          ref={el => (this.map = el)}
          style={styles.flex} minZoomLevel={15}
          initialRegion={{
            ...this.state.curPos,
            latitudeDelta: this.state.latitudeDelta,
            longitudeDelta: this.state.longitudeDelta,
          }}>
          <MapView.Marker coordinate={this.state.curPos} anchor={{ x: 0.5, y: 0.5 }} />
        </MapView> : null}
        <View style={styles.buttonContainerUpDown}>
          <TouchableOpacity style={[styles.button, styles.up]} onPress={() => this.changePosition(0.0001, 0)} >
            <Text>+ Lat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.down]} onPress={() => this.changePosition(-0.0001, 0)} >
            <Text>- Lat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainerLeftRight}>
          <TouchableOpacity style={[styles.button, styles.left]} onPress={() => this.changePosition(0, -0.0001)} >
            <Text>- Lon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.right]} onPress={() => this.changePosition(0, 0.0001)} >
            <Text>+ Lon</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    width: '100%',
  },
  buttonContainerUpDown: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainerLeftRight: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgba(100,100,100,0.2)',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 50,
    width: 50,
  },
  up: {
    alignSelf: 'flex-start',
  },
  down: {
    alignSelf: 'flex-end',
  },
  left: {
    alignSelf: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
  },
});