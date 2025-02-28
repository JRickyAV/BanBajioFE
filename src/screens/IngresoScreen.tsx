// src/screens/HomeScreen.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function IngresoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Segunda prueba</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
})
