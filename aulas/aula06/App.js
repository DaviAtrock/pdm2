import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './contexts/AuthContext';
import Main from './routes/Main';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;