import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import TopBar from '../components/topbar'

export default function Cartera() {
  return (
    <View>      
      <TopBar />
      <View style={styles.allcontainer}>

      <View style={styles.container}>
        <Text style={styles.text}><Text style={styles.title}>Saldos en Inversiones:</Text>$4000</Text>
        <View style={styles.textoContainer}>
        <Text style={styles.title}>Proyectos aportados</Text>
        </View>
        <View>
        <Text style={styles.text}><Text style={styles.title}>Proyecto:</Text>Agrovida🌱 AgroVida: Agricultura Sustentable para el Futuro</Text>
        <Text style={styles.text}><Text style={styles.title}>Aportado:</Text>$4000</Text>
        <Text style={styles.text}><Text style={styles.title}>Fecha final de recaudación: 10/3/2025</Text></Text>
        <Text style={styles.text}><Text style={styles.title}>Tipo de proyecto:</Text>Medio ambiente</Text>
        <Text style={styles.text}><Text style={styles.title}>Rendimiento anual:</Text> 6%</Text>


{/* 
        <Text style={{fontFamily:'AlbertSans-Black', fontSize:30}}>Medio ambiente</Text>
        <Text style={{fontFamily:'AlbertSans-BlackItalic', fontSize:30}}>Medio ambiente</Text>
        <Text style={{fontFamily:'AlbertSans-Bold', fontSize:30}}>Medio ambiente</Text>
        <Text style={{fontFamily:'AlbertSans-BoldItalic', fontSize:30}}>Medio ambiente</Text>
        <Text style={{fontFamily:'AlbertSans-ExtraBold', fontSize:30}}>Medio ambiente</Text>
        <Text style={{fontFamily:'AlbertSans-ExtraBoldItalic', fontSize:30}}>Medio ambiente</Text>
        <Text style={{fontFamily:'AlbertSans-ExtraLight', fontSize:30}}>Medio ambiente</Text>
        <Text style={{fontFamily:'AlbertSans-ExtraLightItalic', fontSize:30}}>Medio ambiente</Text>
        <Text style={{fontFamily:'AlbertSans-Italic', fontSize:30}}>Medio ambiente</Text>
        <Text style={{fontFamily:'AlbertSans-Light', fontSize:30}}>Medio ambiente</Text>
        <Text style={{fontFamily:'AlbertSans-LightItalic', fontSize:30}}>Medio ambiente</Text>
        <Text style={{fontFamily:'AlbertSans-Medium', fontSize:30}}>Medio ambiente</Text>
        <Text style={{fontFamily:'AlbertSans-MediumItalic', fontSize:30}}>Medio ambiente</Text>
        <Text style={{fontFamily:'AlbertSans-Regular', fontSize:30}}>Medio ambiente</Text>
        <Text style={{fontFamily:'AlbertSans-SemiBold', fontSize:30}}>Medio ambiente</Text>
        <Text style={{fontFamily:'AlbertSans-SemiBoldItalic', fontSize:30}}>Medio ambiente</Text> */}

        </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  allcontainer:{
    width:'100%',
    height:'100%'
  },
  container: {
    flex: 1,
    marginLeft:'5%',
  },
  title: {
    fontSize: 20,
    fontFamily: 'AlbertSans-Black'
  },
  text:{
    fontSize:20,
    fontFamily:'AlbertSans-Regular'
  },
  textoContainer:{
    marginTop:20,
    alignItems:'center'
  },
  textoContainerr:{
    marginTop:20,
    alignItems:'center'
  }
  
})
