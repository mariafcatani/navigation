import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import Botao from '../../components';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Text style={styles.textUnipar}>UNIPAR</Text>
      <Botao 
        title="Iniciar"
        onPress={() => navigation.navigate('Segunda')}
      />
    </View>
  );
};

export default Home;