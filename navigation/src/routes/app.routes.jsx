import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Segunda from '../screens/Segunda';
import Terceira from '../screens/Terceira';
import Quarta from '../screens/Quarta';

const {Screen, Navigator} = createNativeStackNavigator();

const AppRoutes = () => {
return(

    <Navigator initialRouteName="Home">
    <Screen name="Home" component={Home} />
    <Screen name="Segunda" component={Segunda} />
    <Screen name="Terceira" component={Terceira} />
    <Screen name="Quarta" component={Quarta}/>
    <Screen name="Finalizar" component={Home}/></Navigator>

);
};

export default AppRoutes;