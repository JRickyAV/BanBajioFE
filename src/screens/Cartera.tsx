import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'

export default function Cartera() {
  return (
    <View style={styles.allcontainer}>      
      <ImageBackground source={require('../../assets/bbbg3.png')} style={styles.imagecontainer} resizeMode='stretch'>
      </ImageBackground> 
      <View style={styles.centeredcontainer}>
            <Image style={styles.icon} source={require('../../assets/BB.png')} ></Image>
          </View>
      <View style={styles.container}>
        <Text style={styles.text}><Text style={styles.title}>Saldos en Inversiones:</Text>$4000</Text>
        <View style={styles.textoContainer}>
        <Text style={styles.title}>Proyectos aportados</Text>
        </View>
        <View>
        <Text style={styles.text}><Text style={styles.title}>Proyecto:</Text>Agrovida🌱 AgroVida: Agricultura Sustentable para el Futuro</Text>
        <Text style={styles.text}><Text style={styles.title}>Aportado:</Text>$4000</Text>
        <Text style={styles.text}><Text style={styles.title}>Fecha final de recaudación:</Text></Text>
        <Text style={styles.text}><Text style={styles.title}>Tipo de proyecto:</Text>Medio ambiente</Text>


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
  centeredcontainer:{
    alignItems:'center'
  },
  icon:{
    width: 80,
    height:80,
  },
  container: {
    flex: 1,
    marginLeft:'5%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagecontainer: {
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%'
    },
  text:{
    fontSize:20
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
