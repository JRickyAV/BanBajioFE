import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native'
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';

type ProjectScreenProps = {
  route: RouteProp<RootStackParamList, 'Project'>;
};

export default function Proyecto({ route }: ProjectScreenProps) {
const { project } = route.params;

  return (
    <View style={styles.allcontainer}> 
        <ImageBackground source={require('../../../assets/bbbg3.png')} style={styles.imagecontainer} resizeMode='stretch'>
        </ImageBackground>     
        <View style={styles.centeredcontainer}>
        <Image style={styles.icon} source={require('../../../assets/BB.png')} ></Image>
        </View>
        <View style={styles.container}>
        <Text style={styles.text}><Text style={styles.title}>Nombre del proyecto:</Text> {project.name}</Text>
        <Text style={styles.text}><Text style={styles.title}>Descripción:</Text> {project.description}</Text>
        <Text style={styles.text}><Text style={styles.title}>Recaudación total:</Text> {project.budget}</Text>
        </View>

        <View style={styles.centeredcontainer}>
        <TouchableOpacity style={styles.button} >
                  <Text style={styles.buttonText}>Aportar a proyecto</Text>
        </TouchableOpacity>
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
  text: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#7840BF',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText:{
    color:'rgb(255, 255, 255)'
  },
  imagecontainer: {
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%'
    },
})
