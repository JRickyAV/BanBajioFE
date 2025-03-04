import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType, ImageBackground } from 'react-native';

interface CustomCardProps {
  title: string;
  image: ImageSourcePropType;
}

export default function TarjetaProyectos(props: CustomCardProps) {
  return (
    <View style={styles.card}>
      
      <Image source={props.image} style={styles.image} />
      <Text style={styles.title}>{props.title}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagecontainer: {
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%'
    },
});
