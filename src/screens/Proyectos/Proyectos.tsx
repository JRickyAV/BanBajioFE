import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator, Image, RefreshControl } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../navigation/BottomTabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';
import { useProjects } from '../../hooks/useProject';
import TopBar from '../../components/topbar';
import { globalStyles } from '../../styles/globalStyles';

type Props = BottomTabScreenProps<TabParamList, 'Proyectos'>;

const truncateText = (text: string, limit: number) => 
  text.length > limit ? text.slice(0, limit) + '...' : text;

export default function Proyectos() {
  const [refreshing, setRefreshing] = useState(false);
  const stackNavigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { projects, loading, error, refetch } = useProjects(); // Ensure `refetch` is available in your hook

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    
    // Call the function from your hook to re-fetch data
    await refetch();
    
    setRefreshing(false);
  }, [refetch]);

  if (loading) return <ActivityIndicator size="large" color="#007bff" />;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <>
      <View style={globalStyles.allcontainer}>
        <TopBar />
        <View style={styles.container}>
          <FlatList
            data={projects}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => stackNavigation.navigate('Project', { project: item })}>
                <View style={globalStyles.centeredContent}>
                  <Text style={globalStyles.title}>{item.name}</Text>
                  <Image style={globalStyles.testImg} source={{ uri: item.img }} />
                  <Text style={globalStyles.text}>{truncateText(item.description, 150)}</Text>
                </View>
              </TouchableOpacity>
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    marginTop: 20,
    fontSize: 18,
  },
});
