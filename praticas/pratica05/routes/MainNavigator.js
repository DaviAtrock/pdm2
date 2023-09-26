import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Perfil from '../screens/Perfil'

const Stack = createNativeStackNavigator() 

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  )
}

export default MainNavigator;