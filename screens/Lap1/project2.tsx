import React from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Project_2'>;
};

const project2: React.FC<Props> = ({ navigation }) => {
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 }}>
    //   <Button title="Press Me" onPress={() => Alert.alert('xin chao VIET NAM !')} />
    // </View>
   <TouchableOpacity
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 }}
      onPress={() => Alert.alert('xin chao VIET NAM !')}
    >
      <Text style={{ fontSize: 20, color: 'white', backgroundColor: 'blue' }}>Press Me</Text>
    </TouchableOpacity>
  );
};

export default project2;
