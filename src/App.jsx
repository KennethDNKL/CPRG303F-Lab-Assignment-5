/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Lab Assignment 5: Navigation and Routing
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

function App(){


  //Create a stack navigator:
  const Stack = createStackNavigator();
  
  
  
    return (
      <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  
  
  export default App;
