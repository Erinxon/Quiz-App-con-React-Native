import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import AppInicio from './View/Inicio'
import MostrarPreguntas from './View/MostrarPreguntas'
import Resultado from './View/Resultado'

const stack = createStackNavigator();


const MyStack = () => {
  return (
    <stack.Navigator screenOptions={{ headerLeft: null }} >
      <stack.Screen
        name="Inicio"
        component={AppInicio}
      />
      <stack.Screen
        name="Preguntas"
        component={MostrarPreguntas}
      />
      <stack.Screen
        name="Resultado"
        component={Resultado}
      />
    </stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}