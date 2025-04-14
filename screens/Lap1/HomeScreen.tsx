import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  // return (
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //     <Text>List Project</Text>
  //     <Button title="project 1" onPress={() => navigation.navigate('Project_1')} />
  //     <Button title="project 2" onPress={() => navigation.navigate('Project_2')} />
  //     <Button title="project 3" onPress={() => navigation.navigate('Project_3')} /> 
  //       <Button title="project 4" onPress={() => navigation.navigate('Project_4')} />
  //     <Button title="project 5" onPress={() => navigation.navigate('Project_5')} /> 
  //     <Button title="project 6" onPress={() => navigation.navigate('Project_6')} />
  //     <Button title="project 7" onPress={() => navigation.navigate('Project_7')} />
  //     <Button title="project 8" onPress={() => navigation.navigate('Project_8')} />
  //     <Button title="project 9" onPress={() => navigation.navigate('Project_9')} />
  //     <Button title="project 10" onPress={() => navigation.navigate('Project_10')} />
  //   </View>
  // );

  const projects = [
    'Project_1', 'Project_2', 'Project_3', 'Project_4', 'Project_5',
    'Project_6', 'Project_7', 'Project_8', 'Project_9', 'Project_10',
  ] as const;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>List Project</Text>
      {projects.map((project, index) => (
        <View key={index} style={{ marginVertical: 5 }}>
          <Button
            title={`Project ${index + 1}`}
            onPress={() => navigation.navigate(project)}
          />
        </View>
      ))}
    </View>
  );
}
   
export default HomeScreen;
