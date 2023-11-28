import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';
import Botao from '../../components';

const Terceira = ({ navigation, route }) => {
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.textRG}>Informe seu RG:</Text>
      <TextInput
        style={styles.input}
        placeholder="RG"
        value={rg}
        onChangeText={text => setRg(text)}
      />
      <Text style={styles.textCPF}>Informe seu CPF:</Text>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={text => setCpf(text)}
      />
      <Botao
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
      <Botao
        title="Próxima"
        onPress={() =>
          navigation.navigate('Quarta', {
            nome: route.params.nome,
            sobrenome: route.params.sobrenome,
            rg,
            cpf,
          })
        }
      />
    </View>
  );
};

export default Terceira;

     