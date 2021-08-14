import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import  Icon  from "react-native-vector-icons/FontAwesome";

import HomeUsuarioAndar from "../../screenZonaUsuario/HomeUsuarioAndar";

const leftIcon = (navigation, icon) => (
  <Icon name={icon} style={{ marginLeft: 20 }} size={20} color="#000" onPress={() => navigation.openDrawer()} />
);

const StackHomeUsuarioAndar = createStackNavigator({
    Home: {
      screen: HomeUsuarioAndar,
      navigationOptions: ({ navigation }) => ({
        title: "Servicio Andar",
        headerLeft: () => leftIcon(navigation, "bars")
      })
    }
});

export default StackHomeUsuarioAndar;

