import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './views/Home';
import Login from './views/Login';
import Cadastro from './views/Cadastro';


export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login"  options={{headerShown:false}} component={Login} />
          <Stack.Screen name="Cadastro"  options={{headerShown:false}} component={Cadastro} />
          <Stack.Screen name="Home" options={{headerShown:false}} component={Home} navigationBarStyle={{navBarHidden:true}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
