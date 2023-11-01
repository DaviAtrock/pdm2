import { View, Text, TextInput, Switch, Button, StyleSheet } from 'react-native';

const New = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.appBar}>
        <Text style={estilos.appBarTitle}>Home</Text>
      </View>

      <TextInput
        estilos={estilos.input}
        placeholder={'Nome'}
        keyboardType={'name'}
      />

      <Switch>
        <Text>Status</Text>
      </Switch>

      <Button title={'Salvar'} />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  appBar: {
    backgoundcolor: 'blue',
    padding: 16,
    alignItems: 'center',
  },
  appBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: 100,
    height: 48,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default New;
