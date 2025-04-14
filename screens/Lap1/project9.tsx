import React from 'react';
import { View, Text,  SectionList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Project_9'>;
};


  const DATA = [
    { title: 'A', data: ['Item 1', 'A']},
    { title: 'B', data: ['Item 2' ,'B']},
    { title: 'C', data: ['Item 3' ,'C']},
    // Add more items as needed
  ];

export default () => (
<SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (<Text style={{paddingLeft:20}}>{item}</Text>
      )}
      renderSectionHeader={({ section: { title } }) => (
      <Text style={{fontWeight:'bold', backgroundColor:'#eee'}}>{title}</Text>
      )}

    />

);

