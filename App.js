import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './src/Home';
import Users from './src/Users';
import LogoTitle from './src/utils/LogoTitle';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        defaultStatus={"closed"}
        initialRouteName="Home"
        screenOptions={{
          drawerActiveTintColor: "red",
          drawerItemStyle: {marginTop: 20},
          drawerLabelStyle: {fontSize: 30},
          drawerContentContainerStyle: {backgroundColor: "green"},
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
        />
        <Drawer.Screen
          name="Users"
          component={Users}
          initialParams={{
            id: 1,
            codeName: 'No Name'
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
