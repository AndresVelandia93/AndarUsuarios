import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image, Alert, TouchableOpacity, Dimensions, ScrollView, SafeAreaView, StatusBar } from 'react-native';

export default class MiCuentaAndar extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>ADMINISTRADOR CUENTA ANDAR</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      backgroundColor:'#fff',
      alignItems: 'center', 
      justifyContent: 'center', 
    }, 
    
  });
