import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Project_5'>;
};

const project5: React.FC<Props> = ({ navigation }) => {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    box: {
      width: 100,
      height: 100,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10, // Optional: Add spacing between boxes
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  const Square = ({ text }: { text: string }) => (
    <View style={style.box}>
      <Text style={style.text}>{text}</Text>
    </View>
  );

  return (
    <View style={style.container}>
  
      <Square text="Hello" />
      <Square text="World" />
      <Square text="!" />
    </View>
  );
}
export default project5;
