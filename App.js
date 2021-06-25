import React, {useState } from 'react';
import { View, Image, StyleSheet,Text,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import main from './src/pages/main';
import second from './src/pages/second';
import camera from './src/pages/camera';


const Stack = createStackNavigator();
 export default function App(){
   
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}> 
      <Stack.Screen name="main" component={main}/>
      <Stack.Screen name="second" component={second}/>
      <Stack.Screen name="camera" component={camera}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
 }