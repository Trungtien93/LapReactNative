import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


type ProjectStackParamList = {
  HomeScreen: undefined;
};

const Project7= () => {
  const navigation = useNavigation<NativeStackNavigationProp<ProjectStackParamList>>();

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

export default Project7;
