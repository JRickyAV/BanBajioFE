import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import TopBar from '../../components/topbar';
import ProjectComponent from '../../components/project';
import { globalStyles } from '../../styles/globalStyles';

type ProjectScreenProps = {
  route: RouteProp<RootStackParamList, 'Project'>;
};

export default function Proyecto({ route }: ProjectScreenProps) {
const { project } = route.params;

  return (
    <View style={globalStyles.allcontainer}> 
      <TopBar />
      <ProjectComponent project={project} />
    </View>
  )
}
