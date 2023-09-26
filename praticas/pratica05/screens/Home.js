import { View, Text, Button } from 'react-native';

const Home = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
    }} >
    <Text>Home</Text>
    <Button title="Perfil" onPress={() => {}} /> 
    </View>  
  );
};

export default Home;