import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ImageBackground } from 'react-native';

const section1Images = [
  { id: '1', name:"Tecnología de plantas genera ingresos a inversionistas", url: require('../../assets/plants.jpg') },
  { id: '2', name:"Establo de vaquitas transforma el mundo ",url: require('../../assets/cows.png') },
  { id: '3', name:"Nuevo Proyecto Sustentable de Parque de Innovación ",url:require('../../assets/pit.jpg') },
];

export default function Inicio() {
  return(
    <View style={styles.allcontainer}>
      <ImageBackground source={require('../../assets/bbbg3.png')} style={styles.imagecontainer} resizeMode='stretch'>
      </ImageBackground>
       <View style={styles.centeredcontainer}>
        <Image style={styles.icon} source={require('../../assets/BB.png')} ></Image>
      </View>
    <View style={styles.container}>
      <View style={styles.itemContainer} >
        <Text style={styles.title}>Noticias</Text>

      </View>
      <FlatList
        data={section1Images}
        keyExtractor={(item) => item.id}
        numColumns={1}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>{item.name}{"\n"}</Text>
            </View>
            <Image source={typeof item.url === 'string' ? { uri: item.url } : item.url} style={styles.image} />
          </View>
        )}
      />
    </View>
    </View>
  )
};

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
    padding: 10,
  },
  sectionTitle: {
    alignItems:'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  itemContainer: {
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign:'center',
    width:"100%"
  },
  title:{
    fontSize: 26,
    fontWeight:'bold'
  },
  image: {
    width:'90%',
    height: 180,
    borderRadius: 10,
    resizeMode:'stretch',
    marginBottom:15,
  },
  testing:{
    borderWidth:1
  },
  textContainer:{
    width:'90%',
    alignItems: 'center',
  },
  imagecontainer: {
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%'
    },
});