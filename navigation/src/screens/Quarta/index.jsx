import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Botao from '../../components';

const Quarta = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textGeral}>Olá  {route.params.nome} {route.params.sobrenome}</Text>
      <Text style={styles.textGeral}>Portador do documento</Text>
      <Text style={styles.textGeral}>CPF: {route.params.cpf}</Text>
      <Text style={styles.textGeral}>RG: {route.params.rg}</Text>
      
      <Botao
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
      
      <Botao
        title="Finalizar"
        onPress={() =>
          navigation.navigate('Home')
        }
      />
    </View>
  );
};

export default Quarta;