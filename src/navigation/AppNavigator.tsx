import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import BottomTabNavigator from './BottomTabNavigator';
import ProfileScreen from '../screens/ProfileScreen';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
