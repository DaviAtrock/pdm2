import { useContext } from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Button, TextInput, HelperText } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

import { ContatoContext } from '../contexts/ContatoContext';

const Novo = ({ navigation }) => {
  const { adicionar } = useContext(ContatoContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    adicionar(data);
    navigation.pop();
  };

  const rulesNome = {
    required: { value: true, message: 'Nome é obrigatorio' },
  };

  const rulesTelefone = {
    required: { value: true, message: 'Telefone é obrigatorio' },
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.pop()} />
        <Appbar.Content title="Novo Contato" />
      </Appbar.Header>
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <Controller
          name="nome"
          control={control}
          rules={rulesNome}
          render={({ field: { value, onChange } }) => (
            <TextInput label="Nome" value={value} onChangeText={onChange} />
          )}
        />
        <HelperText type="error" visible={true}>
          {errors.nome && errors.nome.message}
        </HelperText>
        <Controller
          name="telefone"
          control={control}
          rules={rulesTelefone}
          render={({ field: { value, onChange } }) => (
            <TextInput
              label="Telefone"
              keyboardType="phone-pad"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <HelperText type="error" visible={true}>
          {errors.telefone && errors.telefone.message}
        </HelperText>
        <Button mode="contained" onPress={handleSubmit(onSubmit)}>
          Salvar
        </Button>
      </ScrollView>
    </View>
  );
};

export default Novo;