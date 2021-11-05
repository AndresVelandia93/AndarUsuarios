import React, { Component } from 'react';

import axios from 'axios';
import Global from '../../Global';

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
      password:'',
      documentError:'',
      firstNameError:'',
      lastNameError:'',
      emailError:'',
      phoneError:'',
      passwordError:'',
      status: false
    }
  }

  nuevoUsuario = (e) => {
    console.log('Ingresa a nuevoUsuario');
    var tipoDoc = '1';
    var numDoc = this.state.document;
    var nombre = this.state.firstName;
    var apellido = this.state.lastName;
    var correo = this.state.email;
    var celular = this.state.phone;
    var password = this.state.password;

    var fechaCreacion = new Date();
    var fechaNacimiento = '1989-06-01T22:31:19.846Z';
    var id = 0;
    var tipo = '';
    var url_Foto_Perfil_S3 = '';

    var usuario = {
      apellido : apellido,
      celular : celular,
      correo : correo,
      fecha_Creacion : fechaCreacion,
      fecha_Modificacion : fechaCreacion,
      fecha_Nacimiento : fechaNacimiento,
      id : id,
      nombre : nombre,
      numero_Documento : numDoc,
      password : password,
      tipo : tipo,
      tipo_Documento : tipoDoc,
      url_Foto_Perfil_S3 : url_Foto_Perfil_S3
    };
    var url = Global.urlAnDar + '/usuario';
    axios.post(url, usuario).then(res => {
      this.setState({status : true})
    });
  }

  submit() {
    var validDocument = this.documentValidator();
    var validFirstName = this.firstNameValidator();
    var validLastName = this.lastNameValidator();
    var validEmail = this.emailValidator();
    var validPhone = this.phoneValidator();
    var validPassword = this.passwordValidator();
    if (validDocument && validFirstName && validLastName && validEmail && validPhone && validPassword) {
      this.nuevoUsuario();
    }
  }

  documentValidator() {
    if (this.state.document == "") {
      this.setState({documentError:"Debes ingresar un número de documento"})
      return false;
    } else {
      this.setState({documentError:""})
      return true;
    }
  }
  firstNameValidator() {
    if (this.state.firstName == "") {
      this.setState({firstNameError:"Debes ingresar tu nombre"})
      return false;
    } else {
      let regex = /^[a-zA-Z]+$/;
      let isValid = regex.test(this.state.firstName)
      if (!isValid) {
        this.setState({firstNameError:"El nombre debe ser alfabético"})
        return false;
      } else {
        this.setState({firstNameError:""})
        return true;
      }
    }
  }
  lastNameValidator() {
    if (this.state.lastName == "") {
      this.setState({lastNameError:"Debes ingresar tu apellido"})
      return false;
    } else {
      let regex = /^[a-zA-Z]+$/;
      let isValid = regex.test(this.state.lastName)
      if (!isValid) {
        this.setState({lastNameError:"El nombre debe ser alfabético"})
        return false;
      } else {
        this.setState({lastNameError:""})
        return true;
      }
    }
  }
  emailValidator() {
    if (this.state.email == "") {
      this.setState({emailError:"Debes ingresar un email"})
      return false;
    } else {
      let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let isValid = regex.test(this.state.email)
      if (!isValid) {
        this.setState({emailError:"Ingresa un email valido"})
        return false;
      } else {
        this.setState({emailError:""})
        return true;
      }
    }
  }
  phoneValidator() {
    if (this.state.phone == "") {
      this.setState({phoneError:"Debes ingresar un número de teléfono"})
      return false;
    } else {
      this.setState({phoneError:""})
      return true;
    }
  }
  passwordValidator() {
    if (this.state.password == "") {
      this.setState({passwordError:"Debes ingresar una contraseña"})
      return false;
    } else if (this.state.password.length < 5) {
      this.setState({passwordError:"La contraseña es demasiado corta"})
      return false;
    } else {
      let regexLetras = /[a-zA-Z]+/;
      let regexNumeros = /[0-9]+/;
      let isValidLetras = regexLetras.test(this.state.password)
      let isValidNumeros = regexNumeros.test(this.state.password)
      if (!isValidLetras || !isValidNumeros) {
        this.setState({passwordError:"La contraseña debe tener letras y números"})
        return false;
      } else {
        this.setState({passwordError:""})
        return true;
      }
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
        <Text style={{color:'red'}}>{this.state.passwordError}</Text>
        <TextInput style={styles.inputText} placeholder="Contraseña"
          onChangeText={(text) => { this.setState({password: text})}}
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
