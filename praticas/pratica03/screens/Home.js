import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const Home = () => {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const renderItem = ({ item }) => (
    <View>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={estilos.container}>
      <View style={estilos.appBar}>
        <Text style={estilos.appBarTitle}>Home</Text>
      </View>
      <FlatList
        estilos={estilos.listItem}
        data={data}
        renderItem={renderItem}
      />

      <Button title={'Adicionar'} />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  appBar: {
    backgroundColor: 'blue',
    padding: 16,
    alignItems: 'center',
  },
  appBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItem: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '%cccccc',
  },
});

export default Home;
