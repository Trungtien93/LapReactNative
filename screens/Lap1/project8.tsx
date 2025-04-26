import React from 'react';
import { View, Text, FlatList,StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type ProjectStackParamList = {
  HomeScreen: undefined;
};

const Project8= () => {
  const navigation = useNavigation<NativeStackNavigationProp<ProjectStackParamList>>();

  const data = Array.from({ length: 50 }, (_, i) => ({ key: `${i}`,name: `Item ${i + 1}`}));
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={{ padding: 20}}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
};

export default Project8;
