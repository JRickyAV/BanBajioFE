// src/navigation/BottomTabNavigator.js
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import IngresoScreen from '../screens/IngresoScreen'
import Menu from '../screens/Menu'

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
  Ingreso: undefined;
  Menu: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Proyectos' , headerShown: false }}
      />
      
      <Tab.Screen
        name="Ingreso"
        component={IngresoScreen}
        options={{ tabBarLabel: 'Noticias' , headerShown: false }}
      />
    <Tab.Screen
        name="Menu"
        component={Menu}
        options={{ tabBarLabel: 'Perfil', headerShown: false  }}
      />
    </Tab.Navigator>
  )
}
