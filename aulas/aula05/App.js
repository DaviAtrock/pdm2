import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NavegacaoAba from './routes/NavegacaoAba';
import NavegacaoPilha from './routes/NavegacaoPilha';
import NavegacaoGaveta from './routes/NavegacaoGaveta';

const App = () => {
  return (
    <NavigationContainer>
      <NavegacaoAba />
    </NavigationContainer>
  );
};

export default App;
