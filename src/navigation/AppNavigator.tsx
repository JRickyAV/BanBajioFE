import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import BottomTabNavigator from './BottomTabNavigator';
import Proyecto from '../screens/Proyectos/Proyecto';
import { Project } from '../types/project';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Project: {project: Project};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="Project" component={Proyecto} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
