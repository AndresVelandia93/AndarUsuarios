import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Alert, TouchableOpacity } from 'react-native';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName:'',
      password:'',
      userNameError:'',
      passwordError:'',
    }
  }

  submit() {
    this.userNameValidator();
    this.passwordValidator();
    console.log('userNameError: ' + this.state.userNameError + ' - passwordError: ' + this.state.passwordError);
    if (this.state.userNameError == "" || this.state.passwordError == "") {
      this.props.navigation.navigate('ZonaUsuarioAndar');
    }
  }

  userNameValidator() {
    if (this.state.userName == "") {
      this.setState({userNameError:"Debes ingresar tu usuario"})
    } else {
      this.setState({userNameError:""})
    }
  }
  passwordValidator() {
    if (this.state.password == "") {
      this.setState({passwordError:"Debes ingresar tu contraseña"})
    } else {
      this.setState({passwordError:""})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/splash_logo.png')} />
        <Text style={{color:'red'}}>{this.state.userNameError}</Text>
        <TextInput style={styles.inputText} placeholder="Usuario"
            onChangeText={(text) => { this.setState({userName: text})}}
        />
        <Text style={{color:'red'}}>{this.state.passwordError}</Text>
        <TextInput style={styles.inputText} placeholder="Contraseña" secureTextEntry
            onChangeText={(text) => { this.setState({password: text})}}
        />
        <TouchableOpacity style={styles.botom} onPress={() => {this.submit()}} >
          <Text style={styles.textBotom}>Ingresar Andar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botom} onPress={() => this.props.navigation.navigate('RegistroAndar')} >
          <Text style={styles.textBotom}>Registrarme Andar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botom} onPress={() => this.props.navigation.navigate('RecuperaPass')}  >
          <Text style={styles.textBotom}>Olvide mi contraseña Andar</Text>
        </TouchableOpacity>
        <Image style={styles.giftBottom} source={require('../../assets/splash.gif')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputText: {
    height: 40,
    borderColor: '#00519f',
    borderWidth: 1,
    width: 300,
    textAlign: 'center',
    marginBottom: 15,

  },

  logo: {
    width: 350,
    height: 130,
    marginTop: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },

  botom: {
    color: '#fff',
    height: 32,
    width: 250,
    backgroundColor: '#de0022',
    textAlign: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 15,
  },

  textBotom: {
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 16,
  },

  giftBottom: {
    width: 400,
    height: 350,
    marginTop: 10,
    backgroundColor: '#00519f',
    resizeMode: 'contain',
  },

});

