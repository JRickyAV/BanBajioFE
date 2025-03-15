import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput,Button, Image, TouchableOpacity,ImageBackground} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import useCreateProject from '../hooks/postProject';
import TopBar from '../components/topbar';
import CreateProjectComponent from '../components/createproject';

export default function CrearProyecto() {
  const { createProject, loading, error } = useCreateProject();
  const [selectedType, setSelectedType] = useState<number>(0);

  const [project, setProject] = useState({
    id:null,
    name: '',
    description: '',
    type: selectedType,
    budget: 0,
    img:''
  });

  const handleSubmit = async () => {
    const response = await createProject(project);
    if (response) {
      console.log('Project created:', response);
    }
  };

  return (
    <View>
      <TopBar></TopBar>
    <View style={styles.allcontainer}>

    <View style={styles.container}>
      <CreateProjectComponent 
        project={project}
        setProject={setProject}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        handleSubmit={handleSubmit}
      />

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

});