import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Project_1'>;
};

const project1: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: '#DB0000', }}>
      <Text style={{color:"#FFF", fontSize:20}}>Hello, React Native!</Text>
      
    </View>
  );
};

export default project1;
