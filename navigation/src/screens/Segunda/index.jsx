import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import Botao from '../../components';
import styles from './styles';

const Segunda = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.textNome}>Informe seu nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={text => setNome(text)}
      />
      <Text style={styles.textSobreNome}>Informe seu sobrenome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={text => setSobrenome(text)}
      />
      <Botao
        title="Próxima"
        onPress={() => navigation.navigate('Terceira', { nome, sobrenome })}
      />
    </View>
  );
};

export default Segunda;