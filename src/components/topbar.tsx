import React from 'react'
import { View, ImageBackground, StyleSheet,Text,Image} from 'react-native'

export default function TopBarComponent() {
  return (
    <>      
        <ImageBackground source={require('../../assets/bbbg3.png')} style={styles.imagecontainer} resizeMode='stretch'>
        </ImageBackground> 
        <View style={styles.centeredcontainer}>
            <Image style={styles.icon} source={require('../../assets/BB.png')} ></Image>
        </View>
    </>
  )
}

const styles = StyleSheet.create({ 
    icon:{
        width: 80,
        height:80,
        },
    imagecontainer: {
        position:'absolute',
        width:'100%',
        height:'100%'
    },
    centeredcontainer:{
        alignItems:'center'
    }
})