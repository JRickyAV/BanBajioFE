import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
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
          Alert.alert('Success', 'Authenticated successfully!');
          navigation.replace('Home');
        } else {
          Alert.alert('Error', 'Authentication failed');
        }
      })
      .catch(() => {
        Alert.alert('Error', 'Biometric authentication failed');
      });
  };

  // 🔹 Function to handle manual login
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    if (email === 'test@example.com' && password === 'password') {
      Alert.alert('Success', 'Logged in successfully!');
      navigation.replace('Home');
    } else {
      Alert.alert('Error', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.biometricsButton} onPress={handleBiometricAuth}>
        <Text style={styles.buttonText}>Login with Fingerprint</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

// 🔹 Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  biometricsButton: {
    backgroundColor: '#28a745',
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
});
