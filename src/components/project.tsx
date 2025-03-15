import React from 'react'
import { StyleSheet,Text, View, TouchableOpacity,Image,TextInput,KeyboardAvoidingView,Platform,ScrollView} from 'react-native'
import { globalStyles } from '../styles/globalStyles'
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Project } from '../types/project';


type ProjectProps = {
    project: Project; // Replace `any` with the actual type of `project`
  };
  

export default function ProjectComponent({project}:ProjectProps) {
  return (
    <>  
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
            <ScrollView 
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
            <Text style={globalStyles.title}>{project.name}</Text> 
            <Text style={globalStyles.text}>{project.description}</Text> 
            <Text style={globalStyles.text}><Text style={globalStyles.title}>Total recaudado</Text> {project.budget}</Text>
            <Image style={globalStyles.testImg} source={{uri:project.img}}></Image>

            <Text style={globalStyles.text}><Text style={globalStyles.title}>Actualizaciones</Text> {'>'}</Text>
            <Text style={globalStyles.text}><Text style={globalStyles.title}>Opiniones</Text> {'>'}</Text>
            <Text style={globalStyles.text}><Text style={globalStyles.title}>Fecha final de recaudación:</Text> 20/3/2025</Text>

            <View style={globalStyles.buttonContainer}>

            <TextInput
                style={globalStyles.input}
                placeholder="Cantidad"
                placeholderTextColor='gray'
                keyboardType='numeric'
            />

                <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Aportar a proyecto</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
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

