import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Botao = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.botaoText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Botao;