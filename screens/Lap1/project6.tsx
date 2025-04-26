import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Props } from 'react-native-paper';

type ProjectStackParamList = {
  HomeScreen: undefined;
};

const Project6= () => {
  const navigation = useNavigation<NativeStackNavigationProp<ProjectStackParamList>>();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {[...Array(100)].map((_, i) => (
        <View key={i} style={styles.itemContainer}>
          <Text style={styles.itemText}>Item {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Project6;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  itemContainer: {
    padding: 15,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Hiệu ứng đổ bóng trên Android
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});