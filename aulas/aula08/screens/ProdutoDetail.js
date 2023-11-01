import { View, Text, Image, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ProdutoContext } from '../contexts/ProdutoContext';

const ProdutoDetail = ({ route, navigation }) => {
  const { produtoId } = route.params;
  const { findProduto } = useContext(ProdutoContext);
  const produto = findProduto(produtoId);

  return (
    <View style={{ flex: 1 }}>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} >
      {produto.imagens.map((imagem, index) => (
        <Image key={index} style={styles.imageItem} source={{ uri: imagem }} />
      ))}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageItem: {
    width: '33%',
    height: 100,
  },
});

export default ProdutoDetail;
