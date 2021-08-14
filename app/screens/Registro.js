import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, Button, Image, Alert, TouchableOpacity} from 'react-native';

export default class RegistroAndar extends Component {
  constructor() {
    super();
    this.state = {
      document:'',
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      documentError:'',
      firstNameError:'',
      lastNameError:'',
      emailError:'',
      phoneError:'',
    }
  }

  submit() {
    this.documentValidator();
    this.firstNameValidator();
    this.lastNameValidator();
    this.emailValidator();
    this.phoneValidator();
  }

  documentValidator() {
    if (this.state.document == "") {
      this.setState({documentError:"Debes ingresar un número de documento"})
    } else {
      this.setState({documentError:""})
    }
  }
  firstNameValidator() {
    if (this.state.firstName == "") {
      this.setState({firstNameError:"Debes ingresar tu nombre"})
    } else {
      let regex = /^[a-zA-Z]+$/;
      let isValid = regex.test(this.state.firstName)
      if (!isValid) {
        this.setState({firstNameError:"El nombre debe ser alfabético"})
      } else {
        this.setState({firstNameError:""})
      }
    }
  }
  lastNameValidator() {
    if (this.state.lastName == "") {
      this.setState({lastNameError:"Debes ingresar tu apellido"})
    } else {
      let regex = /^[a-zA-Z]+$/;
      let isValid = regex.test(this.state.lastName)
      if (!isValid) {
        this.setState({lastNameError:"El nombre debe ser alfabético"})
      } else {
        this.setState({lastNameError:""})
      }
    }
  }
  emailValidator() {
    if (this.state.email == "") {
      this.setState({emailError:"Debes ingresar un email"})
    } else {
      let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let isValid = regex.test(this.state.email)
      if (!isValid) {
        this.setState({emailError:"Ingresa un email valido"})
      } else {
        this.setState({emailError:""})
      }
    }
  }
  phoneValidator() {
    if (this.state.phone == "") {
      this.setState({phoneError:"Debes ingresar un número de teléfono"})
    } else {
      this.setState({phoneError:""})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/splash_logo.png')} />
        <TextInput style={styles.inputText} placeholder="Tipo Documento" />
        <Text style={{color:'red'}}>{this.state.documentError}</Text>
        <TextInput style={styles.inputText} placeholder="Documento"
          onChangeText={(text) => { this.setState({document: text})}}
        />
        <Text style={{color:'red'}}>{this.state.firstNameError}</Text>
        <TextInput style={styles.inputText} placeholder="Nombres"
          onChangeText={(text) => { this.setState({firstName: text})}}
        />
        <Text style={{color:'red'}}>{this.state.lastNameError}</Text>
        <TextInput style={styles.inputText} placeholder="Apellidos"
          onChangeText={(text) => { this.setState({lastName: text})}}
        />
        <Text style={{color:'red'}}>{this.state.emailError}</Text>
        <TextInput style={styles.inputText} placeholder="Correo"
          onChangeText={(text) => { this.setState({email: text})}}
        />
        <Text style={{color:'red'}}>{this.state.phoneError}</Text>
        <TextInput style={styles.inputText} placeholder="Telefono de Contacto"
          keyboardType="numeric"
          maxLength={10}
          onChangeText={(text) => { this.setState({phone: text})}}
        />
        <TouchableOpacity style={styles.botom} onPress={() => {this.submit()}} >
            <Text style={styles.textBotom }>Registrarme</Text>
        </TouchableOpacity>
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
      marginTop: -50,
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
      marginTop: 30,
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
      marginTop: 10,
      backgroundColor: '#00519f',
      resizeMode:'contain',
    },

  });
