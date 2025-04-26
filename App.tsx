import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// Import các màn hình của Lap1
import HomeScreen from './screens/Lap1/HomeScreen';
import Project1 from './screens/Lap1/project1';
import Project2 from './screens/Lap1/project2';
import Project3 from './screens/Lap1/project3';
import Project4 from './screens/Lap1/project4';
import Project5 from './screens/Lap1/project5';
import Project6 from './screens/Lap1/project6';
import Project7 from './screens/Lap1/project7';
import Project8 from './screens/Lap1/project8';
import Project9 from './screens/Lap1/project9';
import Project10 from './screens/Lap1/project10';
// Import màn hình Calculator của Lap2
import Calculator from './screens/Lap1/Lap2/Calculator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Định nghĩa Stack cho Lap1 (các project)
function Lap1Stack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen name="Project1" component={Project1} options={{ title: 'Dự Án 1' }} />
      <Stack.Screen name="Project2" component={Project2} options={{ title: 'Dự Án 2' }} />
      <Stack.Screen name="Project3" component={Project3} options={{ title: 'Dự Án 3' }} />
      <Stack.Screen name="Project4" component={Project4} options={{ title: 'Dự Án 4' }} />
      <Stack.Screen name="Project5" component={Project5} options={{ title: 'Dự Án 5' }} />
      <Stack.Screen name="Project6" component={Project6} options={{ title: 'Dự Án 6' }} />
      <Stack.Screen name="Project7" component={Project7} options={{ title: 'Dự Án 7' }} />
      <Stack.Screen name="Project8" component={Project8} options={{ title: 'Dự Án 8' }} />
      <Stack.Screen name="Project9" component={Project9} options={{ title: 'Dự Án 9' }} />
      <Stack.Screen name="Project10" component={Project10} options={{ title: 'Dự Án 10' }} />
    </Stack.Navigator>
  );
}

// Định nghĩa Stack cho Lap2 (Calculator)
function Lap2Stack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Calculator" component={Calculator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// Các tab còn lại để trống
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
        <Tab.Screen name="Lap1" component={Lap1Stack} />
        <Tab.Screen name="Lap2" component={Lap2Stack} />
        <Tab.Screen name="Lap3" component={EmptyScreen} />
        <Tab.Screen name="Lap4" component={EmptyScreen} />
        <Tab.Screen name="Lap5" component={EmptyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
