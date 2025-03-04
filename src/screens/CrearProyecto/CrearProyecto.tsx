import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput,Button, Image, TouchableOpacity,ImageBackground} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import useCreateProject from '../../hooks/postProject';

export default function CrearProyecto() {
  const { createProject, loading, error } = useCreateProject();
  const [selectedType, setSelectedType] = useState<number>(0);

  const [project, setProject] = useState({
    id:null,
    name: '',
    description: '',
    type: selectedType,
    budget: 0,
  });

  const handleSubmit = async () => {
    const response = await createProject(project);
    if (response) {
      console.log('Project created:', response);
    }
  };

  return (
    <View style={styles.allcontainer}>
      <ImageBackground source={require('../../../assets/bbbg3.png')} style={styles.imagecontainer} resizeMode='stretch'>
      </ImageBackground>    
       <View style={styles.centeredcontainer}>
        <Image style={styles.icon} source={require('../../../assets/BB.png')} ></Image>
      </View>
    <View style={styles.container}>
     
      <Text style={styles.label}>Titulo del proyecto:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del Proyecto"
        placeholderTextColor='gray'
        onChangeText={(text) => setProject({ ...project, name: text })}
      />

      <Text style={styles.label}>Descripción:</Text>
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        placeholderTextColor='gray'
        onChangeText={(text) => setProject({ ...project, description: text })}
      />

      <Text style={styles.label}>Tipo de proyecto:</Text>
      <Picker
        selectedValue={selectedType}
        onValueChange={(itemValue) => setSelectedType(itemValue)}
        style={styles.picker}        
      >
        <Picker.Item label="Selecciona una opción..." value="" color='gray'
 />
        <Picker.Item label="Negocios" value="1"  color='gray' />
        <Picker.Item label="Medio ambiente" value="2"  color='gray'/>
        <Picker.Item label="Emergencias" value="3"  color='gray'/>
        <Picker.Item label="Educación" value="4"  color='gray'/>
        <Picker.Item label="Ambiental" value="4"  color='gray'/>


      </Picker>
      <Text style={styles.label}>Recaudación inicial:</Text>
      <TextInput
        style={styles.input}
        placeholder="$0"
        placeholderTextColor='gray'
        keyboardType="numeric"
        onChangeText={(text) => setProject({ ...project, budget: Number(text) })}
      />

      <View style={styles.centeredcontainer}>

      <TouchableOpacity style={styles.button} onPress={handleSubmit} >
                <Text style={styles.buttonText}>Subir Proyecto</Text>
      </TouchableOpacity>
      </View>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  allcontainer:{
    width:'100%',
    height:'100%'
  },
  centeredcontainer:{
    alignItems:'center'
  },
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    color:'rgb(0, 0, 0)'
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
  },  
  icon:{
    width: 80,
    height:80,
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
});