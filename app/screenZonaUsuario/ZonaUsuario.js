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
    //this.changePosition = this.changePosition.bind(this);
    //this.getRotation = this.getRotation.bind(this);
    //this.updateMap = this.updateMap.bind(this);
  }

  render() {
    return (
      <View style={styles.flex}>
        <MapView
          ref={el => (this.map = el)}
          style={styles.flex} minZoomLevel={15}
          initialRegion={{
            ...this.state.curPos,
            latitudeDelta: this.state.latitudeDelta,
            longitudeDelta: this.state.longitudeDelta,
          }}>
          <MapView.Marker coordinate={this.state.curPos} anchor={{ x: 0.5, y: 0.5 }} />
        </MapView>

        <View style={styles.buttonContainerUpDown}>
          <TouchableOpacity style={[styles.button, styles.up]} onPress={() => Alert.alert("Alerta 1")} >
            <Text>+ Lat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.down]} onPress={() => Alert.alert("Alerta 2")} >
            <Text>- Lat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainerLeftRight}>
          <TouchableOpacity style={[styles.button, styles.left]} onPress={() => Alert.alert("Alerta 3")} >
            <Text>- Lon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.right]} onPress={() => Alert.alert("Alerta 4")} >
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