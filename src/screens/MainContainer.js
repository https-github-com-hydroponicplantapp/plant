import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Plant from './Plant';
import SettingsScreen from './SettingsScreen';
import CameraScreen from './CameraScreen';

// Screen names
const plantName = 'Plant';
const settingsName = 'Settings';
const cameraName = 'Camera';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
   
      <Tab.Navigator
        initialRouteName={'Plant'}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === plantName) {
              iconName = focused ? 'leaf' : 'leaf-outline';
            } else if (route.name === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === cameraName) {
              iconName = focused ? 'camera' : 'camera-outline';
            }
          
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}>
        
        
        <Tab.Screen name={cameraName} component={CameraScreen} />
        <Tab.Screen name={plantName} component={Plant} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
   
  );
}

export default MainContainer;
