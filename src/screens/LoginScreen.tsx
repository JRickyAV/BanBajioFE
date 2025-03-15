import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,Image,ImageBackground } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const rnBiometrics = new ReactNativeBiometrics();

  // 🔹 Function to check if biometric authentication is available
  useEffect(() => {
    rnBiometrics.isSensorAvailable().then((result: { available: boolean; biometryType?: string }) => {
      if (!result.available) {
        Alert.alert('Biometric authentication is not available on this device');
      }
    });
  }, []);
  

  // 🔹 Function to handle biometric authentication
  const handleBiometricAuth = () => {
    rnBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint to log in' })
      .then((result: { success: boolean }) => {
        if (result.success) {
          navigation.replace('Home');
        } else {
        }
      })
      .catch(() => {
      });
  };

  // 🔹 Function to handle manual login
  const handleLogin = () => {
    if (!email || !password) {
      return;
    }

    if (email === 'usuario@banbajio.com' && password === 'qwer') {
      navigation.replace('Home');
    } else {
    }
  };

  return (
    <View style={styles.allcontainer} >
      <ImageBackground source={require('../../assets/bbbg.png')} style={styles.imagecontainer} resizeMode='stretch'>
      </ImageBackground>
      <View style={styles.container}>
      <Image style={styles.icon} source={require('../../assets/BB.png')} ></Image>
      <Text style={styles.title}>Crowdfunding</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Inicio de sesion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.biometricsButton} onPress={handleBiometricAuth}>
        <Text style={styles.buttonText}>Inicio por biometría</Text>
      </TouchableOpacity>
      <Text style={styles.version} >Version 1.0.2</Text>
      </View>

    </View>
  );
};

export default LoginScreen;

// 🔹 Styles
const styles = StyleSheet.create({
  allcontainer:{
    width:'100%',
    height:'100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:'60%'
  },
  imagecontainer: {
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%'
    },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7840BF',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#7840BF',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  biometricsButton: {
    backgroundColor: 'rgb(23, 153, 188)',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon:{
    width: 120,
    height:120,
    marginBottom:-20
    // borderWidth: 1,
    // borderColor: 'red',
  },
  version:{
    marginTop:20
  }
});
