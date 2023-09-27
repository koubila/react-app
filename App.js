import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Checkboxes from './src/components/Checkboxes';
import Checkbox from './src/components/Checkboxes';
import CustomInput from './src/components/CustomInput';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Details from './src/screens/Details';
import Users from './src/screens/Users';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      {/* Rest of your app code */}
      <Stack.Navigator>

        <Stack.Screen name="Accueil" component={Home}></Stack.Screen>
        <Stack.Screen name="Utilisateurs" component={Users}></Stack.Screen>
        <Stack.Screen name="Apropos" component={About}></Stack.Screen>
        <Stack.Screen name="Details" component={Details}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: .8,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
