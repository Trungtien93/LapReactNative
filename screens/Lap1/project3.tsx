import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MyButton from './MyButton';
type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Project_3'>;
};

const project3: React.FC<Props> = ({ navigation }) => {
  return (
   <MyButton
      title="Click Here"
      onPress={() => alert('Pressed!')} 
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40   }}
    />
    
  );
};

export default project3;
