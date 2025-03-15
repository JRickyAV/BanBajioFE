import React from 'react'
import { StyleSheet,Text, View, TouchableOpacity,TextInput} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { globalStyles } from '../styles/globalStyles'
import { Project, setProject } from '../types/project';

interface CreateProjectProps {
    project: {
      id: null;
      name: string;
      description: string;
      type: number;
      budget: number;
      img: string;
    };
    setProject: React.Dispatch<React.SetStateAction<{
      id: null;
      name: string;
      description: string;
      type: number;
      budget: number;
      img: string;
    }>>;
    selectedType: number;
    setSelectedType: React.Dispatch<React.SetStateAction<number>>;
    handleSubmit: () => void;
  }

export default function CreateProjectComponent({project,setProject,selectedType,setSelectedType,handleSubmit}:CreateProjectProps) {
  return (
    <>      
        <View style={styles.container}>
                 
            <Text>Titulo del proyecto:</Text>
            <TextInput
                style={globalStyles.input}
                placeholder="Nombre del Proyecto"
                placeholderTextColor='gray'
                onChangeText={(text) => setProject({ ...project, name: text })}
                />
        
            <Text>Descripción:</Text>
            <TextInput
                style={globalStyles.input}
                placeholder="Descripción"
                placeholderTextColor='gray'
                onChangeText={(text) => setProject({ ...project, description: text })}
                />
        
            <Text>Tipo de proyecto:</Text>
            <Picker
                selectedValue={selectedType}
                onValueChange={(itemValue) => setSelectedType(itemValue)}
                // style={styles.picker}        
                >
                <Picker.Item label="Selecciona una opción..." value="" color='gray'/>
                <Picker.Item label="Negocios" value="1"  color='gray' />
                <Picker.Item label="Medio ambiente" value="2"  color='gray'/>
                <Picker.Item label="Emergencias" value="3"  color='gray'/>
                <Picker.Item label="Educación" value="4"  color='gray'/>
                <Picker.Item label="Ambiental" value="4"  color='gray'/>
        
        
            </Picker>
            <Text>Recaudación inicial:</Text>
            <TextInput
                // style={styles.input}
                placeholder="$0"
                placeholderTextColor='gray'
                keyboardType="numeric"
                onChangeText={(text) => setProject({ ...project, budget: Number(text) })}
                />
        
            <View>
        
            <TouchableOpacity style={styles.button} 
            onPress={handleSubmit} 
            >
                        <Text style={styles.buttonText}>Subir Proyecto</Text>
            </TouchableOpacity>
            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({ 
    icon:{
        width: 80,
        height:80,
        },
    container: {
        marginLeft:'5%',
        marginRight:'5%',
        marginBottom:'5%',
        flex:1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        marginTop:'1%',
        fontSize: 18,
        marginBottom:'1%'
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
    }
})

