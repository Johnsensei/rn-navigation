import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './src/Home';
import Users from './src/Users';
import LogoTitle from './src/utils/LogoTitle';

const Stack = createStackNavigator();

const defaultHeader = {
  headerStyle: {
    backgroundColor: 'red',
    borderBottomWidth: 6,
    borderBottomColor: 'black',
    color: 'white',
    
  },
  headerTitle: props => LogoTitle(props),
  headerTitleAlign:'center',
  headerTintColor: '#FFFFFF',
  headerBackTitle: 'Back',
  headerTitleStyle: {
      fontWeight: 'bold',
      fontStyle: 'italic',
      textDecorationLine: 'line-through'
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          ...defaultHeader
        }}
      >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Users' component={Users}
          initialParams={{
            id: 1,
            codeName: 'No Name'
          }}
          options={ ({navigation}) => (
            {headerLeft: () =>
                <Button
                  title='Go Back'
                  onPress={() => navigation.navigate("Home")}
                />,}
          )}
            
            
          //   {
          //   headerLeft: () =>
          //   <Button
          //     title='Do Less'
          //     onPress={() => alert('Less')}
          //   />,
          //   headerRight: () =>
          //   <Button
          //     title='Do More'
          //     onPress={() => alert('More')}
          //   />,
          //   //headerTitle: props => LogoTitle(props)
          //   //title: 'All Users'
          // }}
        
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
