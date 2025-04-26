import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import MyButton from './MyButton';

type ProjectStackParamList = {
  HomeScreen: undefined;
};

const Project3 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ProjectStackParamList>>();

  const handlePress = () => {
    Alert.alert('Pressed!', 'You clicked the button.');
  };

  return (
    <View style={styles.container}>
      <MyButton title="Click Here" onPress={handlePress} style={undefined} />
    </View>
  );
};

export default Project3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});