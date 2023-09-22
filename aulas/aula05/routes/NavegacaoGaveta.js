import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from '../screens/Home'
import Sobre from '../screens/Sobre'

const NavegacaoGaveta = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sobre" component={Sobre} />
    </Drawer.Navigator>
  );
};

export default NavegacaoGaveta;
