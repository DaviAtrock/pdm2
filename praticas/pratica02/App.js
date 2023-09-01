import Box from './components/Box';
import { View, StyleSheet } from 'react-native';

const App = () => (
  <View
    style={[
      styles.container,
      styles.flexRowReverse,
      styles.justifyCenter,
      styles.alignStart,
    ]}>
    <Box color={'red'} size={50}></Box>
    <Box color={'green'} size={50}></Box>
    <Box color={'blue'} size={50}></Box>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumnReverse: {
    flexDirection: 'column-reverse',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
  justifySpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStretch: {
    alignItems: 'stretch',
  },
});

export default App;
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    backgroundColor: '#ecf0f1',
//    padding: 8,
//  },
//  paragraph: {
//    margin: 24,
//    fontSize: 18,
//    fontWeight: 'bold',
//    textAlign: 'center',
//  },
//});
