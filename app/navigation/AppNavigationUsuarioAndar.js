import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import  Icon  from "react-native-vector-icons/FontAwesome";

import StackHomeUsuarioAndar from '../navigation/StacksUsuarioAndar/StackHomeUsuarioAndar';
import StackMiCuentaAndar from '../navigation/StacksUsuarioAndar/StackMiCuentaAndar';

const AppNavigation = createDrawerNavigator ({
    
    Inicio: {
        screen: StackHomeUsuarioAndar,
        navigationOptions: ({ tintColor }) => ({
            drawerLabel: "Inicio",
            drawerIcon: () => <Icon name="home" size={24}  style={{ color: tintColor }} />
        })  
    },

    MiCuenta: {
        screen: StackMiCuentaAndar,
        navigationOptions: ({ tintColor }) => ({
            drawerLabel: "Mi Cuenta",
            drawerIcon: () => <Icon name="user" size={24}  style={{ color: tintColor }} />
        })  
    },

},
{
    drawerBackgroundColor: "#00519f",
    drawerPosition:"left",
    
    contentOptions:{
        activeTintColor: "#ffffff",
        inactiveTintColor: "#dddddd",
        itemsContainerStyles:{
            marginVertical:10,
        }
    }   
    
})

export default createAppContainer(AppNavigation);