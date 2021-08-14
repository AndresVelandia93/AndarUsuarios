import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image, Alert, TouchableOpacity} from 'react-native';

export default class RecuperaPass extends Component {
  constructor() {
    super();
    this.state = {
      userName:'',
      userNameError:'',
    }
  }

  submit() {
    this.userNameValidator();
  }

  userNameValidator() {
    if (this.state.userName == "") {
      this.setState({userNameError:"Debes ingresar tu usuario"})
    } else {
      this.setState({userNameError:""})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/splash_logo.png')} />
        <Text style={{color:'red'}}>{this.state.userNameError}</Text>
        <TextInput style={styles.inputText} placeholder="Usuario Registrado"
            onChangeText={(text) => { this.setState({userName: text})}}
        />
        <TouchableOpacity style={styles.botom} onPress={() => {this.submit()}} >
            <Text style={styles.textBotom }>Recuperar mi cuenta Andar</Text>
        </TouchableOpacity>
        <Image style={styles.giftBottom} source={require('../../assets/splash.gif')} />
    </View>
    );
  };
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center', 
    justifyContent: 'center', 
  },  

  inputText:{
    height: 40,
    borderColor: '#00519f',
    borderWidth: 1,
    width:300,
    textAlign:'center',
    marginBottom: 15,
  },

  logo: {
    width: 320,
    height: 110,
    marginTop: 50,
    marginBottom: 50,
    resizeMode:'contain',
  },

  botom:{
    color:'#fff',
    height: 32,
    width: 250,
    backgroundColor: '#de0022',   
    textAlign: 'center',
    borderRadius:20,
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
  },

  textBotom:{
    color:'#fff',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 16,
  },

  giftBottom: {
    width: 400,
    height: 350,
    marginTop: 40,
    backgroundColor: '#00519f',
    resizeMode:'contain',
  },

});
