// src/navigation/BottomTabNavigator.js
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text, Image } from 'react-native'
import Proyectos from '../screens/Proyectos/Proyectos'
import Inicio from '../screens/Inicio'
import Cartera from '../screens/Cartera'
import CrearProyecto from '../screens/CrearProyecto'
import { globalStyles } from '../styles/globalStyles'

export type TabParamList = {
  Inicio: undefined;
  CrearProyecto: undefined;
  Proyectos: undefined;
  Ingreso: undefined;
  Cartera: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={Inicio}
        options={{
          tabBarLabel: 'Inicio' ,
          headerShown: false,
          tabBarIcon:() => (
            <Image 
              source={require('../../assets/home.png')}
              style={globalStyles.icon}
            />) 
         }}
      />

      {/* Proyectos*/}
      <Tab.Screen
        name="Proyectos"
        component={Proyectos}
        options={{ 
          tabBarLabel: 'Proyectos' , 
          headerShown: false,
          tabBarIcon:() => (
            <Image 
              source={require('../../assets/folder.png')}
              style={globalStyles.icon}
            />)
          }}
      />

      <Tab.Screen
        name="CrearProyecto"
        component={CrearProyecto}
        options={{ 
          tabBarLabel: 'Crear Proyecto' , 
          headerShown: false,
          tabBarIcon:() => (
            <Image 
              source={require('../../assets/add.png')}
              style={globalStyles.icon}
            />) 
        }}
      />

      {/* CARTERA */}
      <Tab.Screen
        name="Cartera"
        component={Cartera}
        options={{ 
          tabBarLabel: 'Cartera', 
          headerShown: false,
          tabBarIcon:() => (
            <Image 
              source={require('../../assets/wallet.png')}
              style={globalStyles.icon}
            />)
        }}
        
      />
    </Tab.Navigator>
  )
}
