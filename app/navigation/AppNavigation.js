import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginAndarPage from '../screens/Login';
import RegistroAndarPage from '../screens/Registro';
import ZonaUsuarioPage from '../screenZonaUsuario/ZonaUsuario';
import RecuperaUsuarioPage from '../screens/RecuperaPass';

const AppNavigation = createStackNavigator({
    LoginAndar: {
        screen: LoginAndarPage,
        navigationOptions: {
            headerShown: false,
        }
    },
    RegistroAndar: {
        screen: RegistroAndarPage,
        navigationOptions: {
            headerShown: true,
        }
    },
    ZonaUsuarioAndar: {
        screen: ZonaUsuarioPage,
        navigationOptions: {
            headerShown: true,
        }
    },
    RecuperaPass: {
        screen: RecuperaUsuarioPage,
        navigationOptions: {
            headerShown: true,
        }
    },
})

export default createAppContainer(AppNavigation);