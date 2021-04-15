import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from "./components/HomeScreen"
import NewSwipe from "./components/NewSwipe"


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
          <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
              <Stack.Screen name="NewSwipe" component={NewSwipe} />
              <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',

  },
});
