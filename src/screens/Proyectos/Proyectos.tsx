import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,FlatList, ActivityIndicator, Image, ImageBackground} from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../navigation/BottomTabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { useNavigation} from '@react-navigation/native';
import { useProjects } from '../../hooks/useProject';  

type Props = BottomTabScreenProps<TabParamList, 'Proyectos'>;
  

const truncateText = (text: string, limit: number) => 
  text.length > limit ? text.slice(0, limit) + '...' : text;

export default function Proyectos({ navigation }: Props) {
  const stackNavigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { projects, loading, error } = useProjects();

  if (loading) return <ActivityIndicator size="large" color="#007bff" />;
  if (error) return <Text>Error: {error}</Text>;
// 
  return (
    <View style={styles.allcontainer}>
      <ImageBackground source={require('../../../assets/bbbg3.png')} style={styles.imagecontainer} resizeMode='stretch'>
      </ImageBackground>
      <View style={styles.centeredcontainer}>
        <Image style={styles.icon} source={require('../../../assets/BB.png')} ></Image>
      </View>
    <View style={styles.container}>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            {/* Navigate to a screen OUTSIDE the tab navigator */}
            <TouchableOpacity onPress={() => stackNavigation.navigate('Project',{ project: item })}>
              <View style={styles.centeredContent}>
              <Text style={styles.projectTitle}>{item.name}</Text>
              </View>
              <Text style={{ fontSize: 14, color: "#666" }}>{truncateText(item.description,150)}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  projectTitle:{
    fontSize: 16, fontWeight: "bold"
  },
  link: {
    color: 'blue',
    marginTop: 20,
    fontSize: 18,
  },
  centeredContent:{
    alignItems:'center',
  },
  icon:{
    width: 80,
    height:80,
  },
  imagecontainer: {
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%'
    },
});
