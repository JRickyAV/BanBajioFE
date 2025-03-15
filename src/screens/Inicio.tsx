import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ImageBackground } from 'react-native';
import TopBar from '../components/topbar';

const section1Images = [
  { id: '1', name:"Tecnología de plantas genera ingresos a inversionistas", url: 'http://127.0.0.1:5000/uploads/granja.jpg' },
  { id: '2', name:"Nuevo Proyecto Sustentable de Parque de Innovación ",url:'http://127.0.0.1:5000/uploads/parque.jpg' },
  { id: '3', name:"Establo de vaquitas transforma el mundo ",url: 'http://127.0.0.1:5000/uploads/cows.png'},
];

export default function Inicio() {
  return(
    <View style={styles.allcontainer}>
      <TopBar />
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
              <Image source={{uri: item.url }} style={styles.image} />
            </View>
          )}
          />
      </View>
    </View>
)};

const styles = StyleSheet.create({
  allcontainer:{
    position:'absolute',
    width:'100%',
    height:'100%'
  },
  centeredcontainer:{
    alignItems:'center'
  },
  container: {
    flex: 1,
    padding: 10,
  },
  sectionTitle: {
    alignItems:'center',
    fontSize: 18,
    fontFamily: 'FunnelDisplay-Bold',
    marginVertical: 10,
  },
  itemContainer: {
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 18,
    fontFamily: 'FunnelDisplay-Bold',
    textAlign:'center',
    width:"100%"
  },
  title:{
    fontSize: 26,
    fontFamily: 'FunnelDisplay-Bold'
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
  }
});