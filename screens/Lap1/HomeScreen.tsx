import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type ProjectStackParamList = {
  HomeScreen: undefined;
  Project1: undefined;
  Project2: undefined;
  Project3: undefined;
  Project4: undefined;
  Project5: undefined;
  Project6: undefined;
  Project7: undefined;
  Project8: undefined;
  Project9: undefined;
  Project10: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ProjectStackParamList>>();

  // Tạo danh sách các dự án
  const data = Array.from({ length: 10 }, (_, i) => `Project${i + 1}`);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh Sách Dự Án</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate(item as keyof ProjectStackParamList)}
          >
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Hiệu ứng đổ bóng trên Android
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
