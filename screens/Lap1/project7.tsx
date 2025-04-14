import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';


type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Project_7'>;
};

const project7: React.FC<Props> = ({ navigation }) => {
  const[name, setName] = React.useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>What is your name?</Text>
      <TextInput
      value={name}
      onChangeText={setName}
      placeholder='Enter your name'
      style={{ borderWidth: 1,  marginBottom: 10 }}/>
      <Button title="Submit" onPress={() => alert(`Hello, ${name}!`)} />
    </View>
  );
};

export default project7;
