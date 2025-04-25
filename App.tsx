import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

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
import Calculator from './screens/Lap1/Lap2/Calculator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 📌 Định nghĩa Stack cho Lap1
function Lap1Stack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="project1" component={project1} />
      <Stack.Screen name="project2" component={project2} />
      <Stack.Screen name="project3" component={project3} />
      <Stack.Screen name="project4" component={project4} />
      <Stack.Screen name="project5" component={project5} />
      <Stack.Screen name="project6" component={project6} />
      <Stack.Screen name="project7" component={project7} />
      <Stack.Screen name="project8" component={project8} />
      <Stack.Screen name="project9" component={project9} />
      <Stack.Screen name="project10" component={project10} />
    </Stack.Navigator>
  );
}

// 📌 Định nghĩa Stack cho Lap2
function Lap2Stack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Calculator" component={Calculator} />
    </Stack.Navigator>
  );
}

// 📌 Lap3, Lap4, Lap5 để trống
function EmptyScreen() {
  return null;
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#fff', height: 60 },
        tabBarActiveTintColor: '#FF4D4D',
        tabBarInactiveTintColor: '#888',
        tabBarIcon: ({ color, size, focused }) => {
          switch (route.name) {
            case 'Lap1':
              return (
                <Ionicons
                  name={focused ? 'home' : 'home-outline'}
                  size={size}
                  color={color}
                />
              );
            case 'Lap2':
              return (
                <MaterialCommunityIcons
                  name={focused ? 'calculator-variant' : 'calculator'}
                  size={size}
                  color={color}
                />
              );
            case 'Lap3':
              return (
                <FontAwesome5
                  name="tools"
                  size={size}
                  color={color}
                />
              );
            case 'Lap4':
              return (
                <Ionicons
                  name="settings-outline"
                  size={size}
                  color={color}
                />
              );
            case 'Lap5':
              return (
                <Ionicons
                  name="person-circle-outline"
                  size={size}
                  color={color}
                />
              );
            default:
              return null;
          }
        },
      })}
      >
        <Tab.Screen name="Lap1" component={Lap1Stack} options={{ headerShown: false }} />
        <Tab.Screen name="Lap2" component={Lap2Stack} options={{ headerShown: false }} />
        <Tab.Screen name="Lap3" component={EmptyScreen} />
        <Tab.Screen name="Lap4" component={EmptyScreen} />
        <Tab.Screen name="Lap5" component={EmptyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
