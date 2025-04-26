import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type ProjectStackParamList = {
  HomeScreen: undefined;
};

const Project1 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ProjectStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, Project 1!</Text>
      <Button title="Quay về Home" onPress={() => navigation.navigate('HomeScreen')} />
    </View>
  );
};

export default Project1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB0000',
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});