import React from 'react';
import { View, Text, FlatList,StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';


type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Project_8'>;
};

const project8: React.FC<Props> = ({ navigation }) => {
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

export default project8;
