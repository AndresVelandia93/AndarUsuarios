import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import  Icon  from "react-native-vector-icons/FontAwesome";

import MiCuentaAndar from "../../screenZonaUsuario/MiCuentaAndar";

const leftIcon = (navigation, icon) => (
  <Icon name={icon} style={{ marginLeft: 20 }} size={20} color="#000" onPress={() => navigation.openDrawer()} />
);

const StackMiCuentaAndar = createStackNavigator({
    Home: {
      screen: MiCuentaAndar,
      navigationOptions: ({ navigation }) => ({
        title: "Mi cuenta Andar",
        headerLeft: () => leftIcon(navigation, "bars")
      })
    }
});

export default StackMiCuentaAndar;

