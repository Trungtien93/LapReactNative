// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Lap1/HomeScreen';
import project1 from './screens/Lap1/project1';
import project2 from './screens/Lap1/project2';
import project3 from './screens/Lap1/project3';
import project4 from './screens/Lap1/project4';
import project5 from './screens/Lap1/project5';
import project6 from './screens/Lap1/project6';
import project7 from './screens/Lap1/project7';
import project8 from './screens/Lap1/project8';
import project9 from './screens/Lap1/project9';
import project10 from './screens/Lap1/project10';
//import SettingsScreen from './screens/SettingsScreen';

// Định nghĩa kiểu cho Stack Navigator
export type RootStackParamList = {
  Home: undefined;
  Project_1: undefined;
  Project_2: undefined;
  Project_3: undefined;
  Project_4: undefined;
  Project_5: undefined;
  Project_6: undefined;
  Project_7: undefined;
  Project_8: undefined;
  Project_9: undefined;
  Project_10: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Project_1" component={project1} />
        <Stack.Screen name="Project_2" component={project2} />
        <Stack.Screen name="Project_3" component={project3} />
        <Stack.Screen name="Project_4" component={project4} />
        <Stack.Screen name="Project_5" component={project5} />
        <Stack.Screen name="Project_6" component={project6} />
        <Stack.Screen name="Project_7" component={project7} />
        <Stack.Screen name="Project_8" component={project8} />
        <Stack.Screen name="Project_9" component={project9} />
        <Stack.Screen name="Project_10" component={project10} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
