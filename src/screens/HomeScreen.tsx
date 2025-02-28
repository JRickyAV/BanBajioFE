import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../navigation/BottomTabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';

type Props = BottomTabScreenProps<TabParamList, 'Home'>;

const HomeScreen: React.FC<Props> = () => {
  // Use NativeStackNavigationProp instead of StackNavigationProp
  const stackNavigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => stackNavigation.navigate('Profile')}>
        <Text>Home Screen</Text>
      {/* Navigate to Profile */}
      
        <Text style={styles.link}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: 'blue',
    marginTop: 20,
    fontSize: 18,
  },
});
