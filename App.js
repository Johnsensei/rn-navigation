import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Home';
import Users from './src/Users';

const Stack = createStackNavigator();

const defaultHeader = {

}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red',
            borderBottomWidth: 6,
            borderBottomColor: 'black',
            color: 'white'
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
              fontWeight: 'bold',
              fontStyle: 'italic',
              textDecorationLine: 'line-through'
          }
        }}
      >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Users' component={Users}
          initialParams={{
            id: 1,
            codeName: 'No Name'
          }}
          options={{
            title: 'All Users'
          }}
        
        />
      </Stack.Navigator>
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
