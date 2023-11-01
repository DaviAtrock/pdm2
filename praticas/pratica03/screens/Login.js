import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
  return (
  <View style={estilos.container}>
    <Text style={estilos.title}>Login</Text>

    <TextInput style={estilos.input}
      placeholder={'E-mail'}
      keyboardType={'email-adress'}
    />

    <TextInput style={estilos.input}
      placeholder={'Senha'}
      secureTextEntry={true}
    />

    <Button
      title={'Entrar'}
    />
  </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: 100,
    height: 48,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  }
})

export default Login;